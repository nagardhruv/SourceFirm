import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import * as Actions from "../store/actions/index";

const WebSocketService = () => {
    const connection = useSelector(state => state.socketReducer?.connection);
    const errors = useSelector(state => state.socketReducer?.errors);
    const user = useSelector(state => state.authReducer?.userDetails);
    const currentUser = useSelector(state => state.chatReducer?.currentUser);
    const currentChat = useSelector(state => state.chatReducer?.currentChat);
    const messageId = useSelector(state => state.chatReducer?.messageId);
    const contactList = useSelector(state => state.chatReducer?.contactList);
    const candidates = useSelector(state => state?.jobPostReducer?.candidateList);
    const [reconnecting, setReconnection] = useState(null);
    const [updateCandidate, setUpdateCandidate] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const connect = () => {
        if (user?.id && !user?.is_new_registered && (!connection || connection?.readyState === 3)) {
            try {
                const client = new W3CWebSocket(process.env.REACT_APP_WS_URL + user.id);
                dispatch({ type: "INITIATE_CONNECTION", payload: client });
            } catch (err) {
                dispatch({ type: "WS_ERROR", payload: { type: 'error', message: "Internal server error" } });
            }
        }
    }

    useEffect(() => {
        if (updateCandidate) {
            let processingCandidate = Object.assign({}, candidates?.results, updateCandidate);

            dispatch({ type: "CANDIDATE_LIST", payload: { ...candidates, results: processingCandidate } });
            setUpdateCandidate(null);
        }
    }, [updateCandidate]);

    useEffect(() => {
        connect();
    }, [user]);

    useEffect(() => {
        if (connection) {
            connection.onopen = () => {
                dispatch({ type: "WS_ERROR", payload: { type: null, message: "" } });
            }

            connection.onerror = () => {
                dispatch({ type: "WS_ERROR", payload: { type: 'error', message: "Internal server error." } });
                dispatch({ type: "INITIATE_CONNECTION", payload: null });
                connection.close(1000);
            }

            connection.onclose = (code) => {
                if (code === 1000) {
                    setTimeout(() => {
                        dispatch({ type: "WS_ERROR", payload: { type: 'warning', message: 'Connecting to server...' } });
                    }, 3000);
                    setReconnection(setTimeout(connect, 10000, connection));
                } else if (code?.code === 1006) {
                    dispatch({ type: "WS_ERROR", payload: { type: 'warning', message: 'Connecting to server...' } });
                    setReconnection(setTimeout(connect, 2000, connection));
                }
            }

            connection.onmessage = (message) => {
                const chatMessage = JSON.parse(message.data)?.response_data;
                let tempChatData = [...currentChat];
                if (chatMessage?.event_type === "chat_message") {
                    if (chatMessage?.room === currentUser?.room) {
                        if (chatMessage?.sender?.id === currentUser.opponent?.id) {
                            dispatch({ type: "SCROLLING_ACTION", payload: "read_message" });
                        }
                        tempChatData.push(chatMessage);
                        dispatch({ type: 'GET_CURRENT_CHAT_HISTORY', payload: tempChatData });
                        dispatch(Actions.getContactList(''));
                    } else {
                        dispatch(Actions.getContactList(''));
                    }
                } else if (chatMessage?.event_type === "chat_notification") {
                    dispatch({ type: 'CHAT_UNREAD_COUNT', payload: chatMessage?.unread_count });
                    dispatch({ type: 'GET_USER_DETAILS', payload: { ...user, unread_count: chatMessage?.unread_count } });
                } else if (chatMessage?.event_type === "deactivate_chat_room") {
                    if (chatMessage?.room === currentUser?.room) {
                        const activeUser = { ...currentUser };
                        activeUser.is_room_active = chatMessage?.is_room_active;
                        dispatch({ type: 'GET_CURRENT_USER', payload: { ...activeUser } });
                    }
                    dispatch(Actions.getContactList(''));
                } else if (chatMessage?.event_type === "error_message") {
                    dispatch({ type: "WS_ERROR", payload: { type: 'error', message: chatMessage?.error_message || 'Sever Error.' } });
                    setTimeout(() => {
                        dispatch({ type: "WS_ERROR", payload: { type: null, message: "" } });
                    }, 3000);
                } else if (chatMessage?.event_type === "update_message") {
                    // let index = tempChatData.findIndex(chat => chat.id === chatMessage?.old_messages);
                    // if (tempChatData?.[index]) {
                    //     tempChatData[index].message_detail.show_detail = false;
                    //     dispatch({ type: 'GET_CURRENT_CHAT_HISTORY', payload: tempChatData });
                    // }
                    tempChatData.map(chat => {
                        if (chatMessage?.old_messages.includes(chat.id)) {
                            chat.message_detail.show_detail = false;
                        }
                        return chat;
                    });
                    dispatch({ type: 'GET_CURRENT_CHAT_HISTORY', payload: tempChatData });
                } else if (chatMessage?.event_type === "online_status") {
                    let tempOpponent = contactList?.find(chat => chat.opponent?.id === chatMessage?.opponent);
                    if (tempOpponent) {
                        let updatedContactList = contactList?.map((chat) => {
                            if (chat.opponent?.id === chatMessage?.opponent) {
                                chat.opponent.is_online = chatMessage.is_online;
                            }
                            return chat
                        })
                        dispatch({ type: 'GET_CONTACT_LIST', payload: updatedContactList })
                        if (currentUser.opponent?.id === chatMessage?.opponent) {
                            let user_status = { ...currentUser }
                            user_status.opponent.is_online = chatMessage.is_online;
                            dispatch({ type: 'GET_CURRENT_USER', payload: user_status });
                        }
                    }
                } else if (chatMessage?.event_type === "update_candidates") {
                    const path = history.location.pathname;
                    const createdPath = `/job-post-detail/${chatMessage?.job_post_id}`;
                    if (chatMessage?.position === 0) {
                        if (chatMessage?.job_post_id && path === createdPath) {
                            dispatch(Actions.getJobPostAllCandidates(chatMessage.job_post_id, 1, 4));
                        }
                    } else {
                        if (path === createdPath) {
                            setUpdateCandidate(chatMessage?.results);
                        }
                    }
                }
            }
        }
    }, [connection, currentChat, messageId]);

    useEffect(() => {
        if (!errors?.type) {
            clearTimeout(reconnecting);
        }
    }, [errors])
}

export const sendMessage = (connection, sender, recipient, roomId, message = null, attachments = []) => {
    try {
        if (connection && connection.readyState === 1) {
            if ((attachments.length > 0 || (message && message?.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/)))) {
                connection.send(JSON.stringify({
                    message: message,
                    sender: sender,
                    recipient: recipient,
                    room: roomId,
                    attachments: attachments?.map(val => (val.id)),
                    event_type: "chat_message"
                }));
                return true;
            }
            return false;
        } else {
            // connection.close(1000);
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const readMessage = (connection, _recipient, room) => {
    try {
        if (connection && connection.readyState === 1) {
            connection?.send(JSON.stringify({
                event_type: "read_message",
                // recipient: recipient,
                room: room,
            }));
            return true;
        } else {
            // connection.close(1000);
            return false;
        }
    } catch (error) {
        return false;
    }
}

export default WebSocketService;