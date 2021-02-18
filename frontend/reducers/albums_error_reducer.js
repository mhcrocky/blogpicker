import { ALBUM_ERRORS, RECEIVE_ALBUM } from "../actions/album_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

const albumErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case ALBUM_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_ALBUM:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default albumErrorsReducer;