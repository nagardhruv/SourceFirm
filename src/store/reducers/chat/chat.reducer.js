const initialState = {
    contactList: [],
    currentChat: [],
    currentUser: null,
    loading: false,
    totalCount: 0,
    initial: true,
    pageData: { page: 1, pageSize: 30 },
    isAttachmentLoading: false,
    attachments: [],
    chatCount: 0,
    scrollPosition: null,
    currentScrollPosition: null,
    scrollingAction: null,
    isMobile: { leftBar: "block", rightBar: "none", active: false },
    search: null,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACT_LIST':
            return { ...state, contactList: action.payload };
        case 'GET_CURRENT_CHAT_HISTORY':
            return { ...state, currentChat: action.payload };
        case 'GET_CURRENT_USER':
            return { ...state, currentUser: action.payload };
        case 'TOTAL_CHAT_COUNT':
            return { ...state, totalCount: action.payload };
        case 'INITIAL':
            return { ...state, initial: action.payload };
        case 'LOADING':
            return { ...state, loading: action.payload };
        case 'PAGE_DATA':
            return { ...state, pageData: action.payload };
        case 'ATTACHMENT_LOADING':
            return { ...state, isAttachmentLoading: action.payload };
        case 'ATTACHMENTS':
            return { ...state, attachments: action.payload };
        case 'CHAT_UNREAD_COUNT': {
            return { ...state, chatCount: action.payload };
        }
        case 'CHAT_SCROLL_POSITION': {
            return { ...state, scrollPosition: action.payload };
        }
        case 'CURRENT_SCROLL_POSITION': {
            return { ...state, currentScrollPosition: action.payload };
        }
        case 'SCROLLING_ACTION':
            return { ...state, scrollingAction: action.payload };
        case 'IS_MOBILE_VIEW':
            return { ...state, isMobile: action.payload };
        case 'SEARCH':
            return { ...state, search: action.payload };
        default:
            return { ...state };
    }

};
export default chatReducer;