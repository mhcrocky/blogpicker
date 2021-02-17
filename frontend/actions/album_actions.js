import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const ALBUM_ERRORS = 'ALBUM_ERRORS';

//regular actions

const receiveAllAlbums = (albums) => {
    return {
        type: RECEIVE_ALL_ALBUMS,
        albums
    }
}

const receiveAlbum = (album) => {
    return {
        type: RECEIVE_ALBUM,
        album
    }
}

const removeAlbum = (albumId) => {
    return {
        type: DELETE_ALBUM,
        albumId
    }
}

const albumErrors = (errors) => {
    return {
        type: ALBUM_ERRORS,
        errors
    }
}

//thunks

export const createAlbum = (album) => (dispatch) => {
    return APIUtil.createAlbum(album)
        .then(album => {
            dispatch(receiveAlbum(album))
        })
        .fail(errors => {
            dispatch(albumErrors(errors))
        })
}

export const fetchAllAlbums = (albums) => (dispatch) => {
    return APIUtil.fetchAllAlbums(albums)
        .then(albums => {
            dispatch(receiveAllAlbums(albums))
        })
}

export const fetchAlbum = (albumId) => (dispatch) => {
    return APIUtil.fetchAlbum(albumId)
        .then(album => {
            dispatch(receiveAlbum(album))
        })
}

export const deleteAlbum = (albumId) => (dispatch) => {
    return APIUtil.deleteAlbum(albumId)
        .then(res => {
            dispatch(removeAlbum(res.albumId))
        })
}