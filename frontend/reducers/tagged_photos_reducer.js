import { DELETE_TAGGED_PHOTO, RECEIVE_ALL_TAGGED_PHOTOS,
        RECEIVE_TAGGED_PHOTO } from "../actions/tagged_photo_actions";

const taggedPhotosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_TAGGED_PHOTOS:
            newState = Object.assign({}, action.taggedPhotos);
            return newState;
        case RECEIVE_TAGGED_PHOTO:
            newState[action.taggedPhoto.id] = action.taggedPhoto;
            return newState;
        case DELETE_TAGGED_PHOTO:
            delete newState[action.taggedPhotoId];
            return newState;
        default:
            return state;
    }
}

export default taggedPhotosReducer;