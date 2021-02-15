import { PHOTO_ERRORS } from "../actions/photo_actions";

const photoErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case PHOTO_ERRORS:
            return action.errors.responseJSON;
        default:
            return state;
    }
}

export default photoErrorsReducer