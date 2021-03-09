import { PHOTO_ERRORS, RECEIVE_PHOTO } from "../../actions/photo_actions";

const photoErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case PHOTO_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_PHOTO:
            return [];
        default:
            return state;
    }
}

export default photoErrorsReducer