import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const PHOTO_ERRORS = 'PHOTO_ERRORS';

//regular actions

const receiveAllPhotos = (photos) => {
    return {
        type: RECEIVE_ALL_PHOTOS,
        photos
    }
}

const receivePhoto = (photo) => {
    return {
        type: RECEIVE_PHOTO,
        photo
    }
}

const removePhoto = (photoId) => {
    return {
        type: DELETE_PHOTO,
        photoId
    }
}

const photoErrors = (errors) => {
    return {
        type: PHOTO_ERRORS,
        errors
    }
}

//thunks

export const createPhoto = (photo) => (dispatch) => { 
    return APIUtil.createPhoto(photo)
        .then(photo => {
            dispatch(receivePhoto(photo));
        })
        .fail((errors) => dispatch(photoErrors(errors)))
}

export const fetchAllPhotos = () => (dispatch) => {
    return APIUtil.fetchAllPhotos()
        .then(photos => {
            dispatch(receiveAllPhotos(photos));
        })
}

export const fetchPhoto = (photoId) => (dispatch) => {
    return APIUtil.fetchPhoto(photoId)
        .then(photo => {
            dispatch(receivePhoto(photo));
        })
}

export const updatePhoto = (photo) => (dispatch) => {
    return APIUtil.updatePhoto(photo)
        .then(photo => {
            dispatch(receivePhoto(photo));
        })
}

export const deletePhoto = (photoId) => (dispatch) => {
    return APIUtil.deletePhoto(photoId)
        .then((res) => {
            dispatch(removePhoto(res.photoId))
        })
}