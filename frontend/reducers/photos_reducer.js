import { DELETE_PHOTO, RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from "../actions/photo_actions";

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PHOTO:
            newState[action.photo.id] = action.photo;
            return newState;
        case RECEIVE_ALL_PHOTOS:
            newState = Object.assign({}, action.photos);
            return newState;
        case DELETE_PHOTO:
            delete newState[action.photoId];
            return newState;
        default:
            return state;
    }
}

export default photosReducer;