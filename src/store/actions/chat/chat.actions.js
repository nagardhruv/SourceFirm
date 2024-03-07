import apiService from 'api/ApiService';
import { dispatchContentLoading } from 'utils/Common';

export function getContactList(search) {
    return (dispatch) => apiService.get(`chat-room/?search=${search}`).then((response) => {
        if (response.status === 200) {
            dispatch({ type: 'GET_CONTACT_LIST', payload: response.data.results });
            if (response.data.results?.length === 0) {
                setTimeout(() => {
                    dispatch({ type: 'INITIAL', payload: false });
                }, 800);
            }
        } else {
            dispatch({ type: 'GET_CONTACT_LIST', payload: [] });
            dispatch({ type: 'INITIAL', payload: false });
        }
    }).catch(() => {
        dispatch({ type: 'GET_CONTACT_LIST', payload: [] });
        dispatch({ type: 'INITIAL', payload: false });
    });
}
export function createRoom(params) {
    return () => apiService.post(`chat-room/`, params);
}
export function readallMessgae(room) {
    return () => apiService.post(`chat-room/${room}/read-all/`, '');
}
export function getCurrentChatHistory(contact, page, pageSize, currentChat = []) {
    return (dispatch) => apiService.get(`chat-room/${contact?.room}/chat-history/?page=${page}&page_size=${pageSize}`).then((response) => {
        if (response.status === 200) {
            let newChat = [];
            if (currentChat.length > 0 && response.data.results.length > 0) {
                newChat = response.data.results.concat(currentChat);
            } else {
                newChat = response.data.results;
            }
            dispatch({ type: 'GET_CURRENT_USER', payload: contact });
            dispatch({ type: 'GET_CURRENT_CHAT_HISTORY', payload: newChat });
            dispatch({ type: 'TOTAL_CHAT_COUNT', payload: response.data.count });
            dispatch({ type: 'LOADING', payload: false });
            setTimeout(() => {
                dispatch({ type: 'INITIAL', payload: false });
            }, 800);
            dispatchContentLoading(dispatch);
        } else {
            dispatch({ type: 'GET_CURRENT_CHAT_HISTORY', payload: [] });
            dispatch({ type: 'TOTAL_CHAT_COUNT', payload: 0 });
            dispatch({ type: 'LOADING', payload: false });
            setTimeout(() => {
                dispatch({ type: 'INITIAL', payload: false });
            }, 800);
            dispatchContentLoading(dispatch);
        }
    }).catch(() => {
        dispatch({ type: 'GET_CURRENT_CHAT_HISTORY', payload: [] });
        dispatch({ type: 'TOTAL_CHAT_COUNT', payload: 0 });
        dispatch({ type: 'LOADING', payload: false });
        dispatchContentLoading(dispatch);
    });
}
export function addAttachment(params) {
    return () => apiService.post(`upload_attachment/`, params);
}