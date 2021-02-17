import * as APIUtil from '../util/photos_albums_util';

export const RECEIVE_ALL_PHOTOS_ALBUMS = 'RECEIVE_ALL_PHOTOS_ALBUMS';
export const RECEIVE_PHOTOS_ALBUM = 'RECEIVE_PHOTOS_ALBUM';

//regular actions

const receiveAllPhotosAlbums = (photosAlbums) => {
    return {
        type: RECEIVE_ALL_PHOTOS_ALBUMS,
        photosAlbums
    }
}

const receivePhotosAlbum = (photosAlbum) => {
    return {
        type: RECEIVE_PHOTOS_ALBUM,
        photosAlbum
    }
}

//thunks

export const createPhotosAlbum = (photosAlbum) => (dispatch) => {
    return APIUtil.createPhotosAlbum(photosAlbum)
        .then((pA) => {
            dispatch(receivePhotosAlbum(pA))
        })
}

export const fetchPhotosAlbums = () => dispatch => {
    return APIUtil.fetchPhotosAlbums()
        .then((pAs) => {
            dispatch(receiveAllPhotosAlbums(pAs))
        })
}