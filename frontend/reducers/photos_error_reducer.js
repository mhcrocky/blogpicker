const photoErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        default:
            return state;
    }
}

export default photoErrorsReducer