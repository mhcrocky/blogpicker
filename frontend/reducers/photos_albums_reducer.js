import { DELETE_ALBUM } from "../actions/album_actions";
import { RECEIVE_ALL_PHOTOS_ALBUMS } from "../actions/photos_album_actions";


const photosAlbumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_PHOTOS_ALBUMS:
            newState = Object.assign({}, action.photosAlbums);
            return newState;
        case DELETE_ALBUM:
            let ids = [];
            Object.values(newState).forEach((pA) => {
                if (pA.albumId === action.albumId) {
                    ids.push(pA.id);
                }
            });
            ids.forEach((id) => {
                delete newState[id];
            })
            return newState;
        default:
            return state;
    }
}

export default photosAlbumsReducer;