import { DELETE_ALBUM } from "../actions/album_actions";
import { RECEIVE_ALL_PHOTOS_ALBUMS, RECEIVE_PHOTOS_ALBUM } from "../actions/photos_album_actions";


const photosAlbumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PHOTOS_ALBUM:
            newState[action.photosAlbum.id] = action.photosAlbum;
            return newState;
        case RECEIVE_ALL_PHOTOS_ALBUMS:
            newState = Object.assign({}, action.photosAlbums);
            return newState;
        case DELETE_ALBUM:
            const ids = Object.values(newState).map((pA) => {
                if (pA.album_id === action.albumId) {
                    return ids;
                }
            })
    }
}