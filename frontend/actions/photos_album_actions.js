import * as APIUtil from '../util/photos_albums_util';

export const RECEIVE_ALL_PHOTOS_ALBUMS = 'RECEIVE_ALL_PHOTOS_ALBUMS';

//regular actions

const receiveAllPhotosAlbums = (photosAlbums) => {
    return {
        type: RECEIVE_ALL_PHOTOS_ALBUMS,
        photosAlbums
    }
}


//thunks

export const createPhotosAlbum = (photosAlbum) => (dispatch) => {
    return APIUtil.createPhotosAlbum(photosAlbum)
        .then((pAs) => {
            dispatch(receiveAllPhotosAlbums(pAs))
        })
}

export const fetchPhotosAlbums = () => dispatch => {
    return APIUtil.fetchPhotosAlbums()
        .then((pAs) => {
            dispatch(receiveAllPhotosAlbums(pAs))
        })
}