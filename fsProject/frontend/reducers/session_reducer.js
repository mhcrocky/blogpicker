import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";


const sessionReducer = (state = {currentUserId: null}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState["currentUserId"] = action.user.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            newState["currentUserId"] = null;
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;