import { DELETE_ALBUM, RECEIVE_ALBUM, RECEIVE_ALL_ALBUMS } from "../actions/album_actions";


const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_ALL_ALBUMS:
            newState = Object.assign({}, action.albums);
            return newState;
        case RECEIVE_ALBUM:
            newState[action.album.id] = action.album;
            return newState;
        case DELETE_ALBUM:
            delete newState[action.albumId]
            return newState;
        default:
            return state;
    }
}

export default albumsReducer;