import { RECEIVE_ALL_TAGS, RECEIVE_TAG } from "../actions/tag_actions";

const tagReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_TAGS:
            newState = Object.assign({}, action.tags);
            return newState;
        case RECEIVE_TAG:
            newState[action.tag.id] = action.tag;
            return newState;
        default:
            return state;
    }
}

export default tagReducer;