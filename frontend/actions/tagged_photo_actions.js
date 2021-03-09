import { createTaggedPhoto, fetchTaggedPhotos,
        destroyTaggedPhoto } from "../util/tagged_photo_util";

export const RECEIVE_TAGGED_PHOTO = "RECEIVE_TAGGED_PHOTO";
export const RECEIVE_ALL_TAGGED_PHOTOS = "RECEIVE_ALL_TAGGED_PHOTOS";
export const DELETE_TAGGED_PHOTO = "DELETE_TAGGED_PHOTO";

//regular actions
const receiveTaggedPhoto = (taggedPhoto) => {
    return {
        type: RECEIVE_TAGGED_PHOTO,
        taggedPhoto
    }
}

const recieveAllTaggedPhotos = (taggedPhotos) => {
    return {
        type: RECEIVE_ALL_TAGGED_PHOTOS,
        taggedPhotos
    }
}

const removeTaggedPhoto = (taggedPhoto) => {
    return {
        type: DELETE_TAGGED_PHOTO,
        taggedPhotoId: taggedPhoto.id
    }
}

//thunk actions

export const newTaggedPhoto = (taggedPhoto) => (dispatch) => {
    return createTaggedPhoto(taggedPhoto)
        .then(taggedPhoto => dispatch(receiveTaggedPhoto(taggedPhoto)));
}

export const receiveTaggedPhotos = () => (dispatch) => {
    return fetchTaggedPhotos()
        .then(taggedPhotos => dispatch(recieveAllTaggedPhotos(taggedPhotos)));
}

export const deleteTaggedPhoto = (id) => (dispatch) => {
    return destroyTaggedPhoto(id)
        .then(taggedPhoto => dispatch(removeTaggedPhoto(taggedPhoto)));
}