import { DELETE_FAVORITE, RECEIVE_FAVORITE, RECEIVE_FAVORITES } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FAVORITES:
            newState = Object.assign({}, action.favorites);
            return newState;
        case RECEIVE_FAVORITE:
            newState[action.favorite.id] = action.favorite;
            return newState;
        case DELETE_FAVORITE:
            delete newState[action.favoriteId];
            return newState;
        default:
            return state;
    }
}

export default favoritesReducer;