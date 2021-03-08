import { DELETE_COMMENT, RECEIEVE_ALL_COMMENTS, RECEIVE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case RECEIEVE_ALL_COMMENTS:
            newState = Object.assign({}, action.comments);
            return newState;
        case DELETE_COMMENT:
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
}

export default commentsReducer;