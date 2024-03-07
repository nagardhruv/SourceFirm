const initialState = {
    connection: null,
    connecting: true,
    errors: { type: null, message: "" },
}

const socketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIATE_CONNECTION":
            return { ...state, connection: action.payload }
        case "CONNECTING":
            return { ...state, connecting: action.payload }
        case "WS_ERROR":
            return { ...state, errors: action.payload }
        default:
            return { ...state };
    }
}

export default socketReducer;