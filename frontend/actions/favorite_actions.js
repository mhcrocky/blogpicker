import { createFavorite, fetchFavorites } from "../util/favorites_api_util";

export const RECEIVE_FAVORITES;
export const RECEIVE_FAVORITE;
export const DELETE_FAVORITE;

const receiveFavorites = (favorites) => {
    return {
        type: RECEIVE_FAVORITES,
        favorites
    }
}

const receiveFavorite = (favorite) => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    }
}

const deleteFavorite = (favoriteId) => {
    return {
        type: DELETE_FAVORITE,
        favoriteId
    }
}

//thunks

export const newFavorite = (favorite) => (dispatch) => {
    return createFavorite(favorite)
        .then(favorite => dispatch(receiveFavorite(favorite)));
}

export const fetchAllFavorites = () => (dispatch) => {
    return fetchFavorites()
        .then(favorites => dispatch(receiveFavorites(favorites)));
}

export const removeFavorite = (id) => (dispatch) => {
    return deleteFavorite(id)
        .then(favorite => dispatch(deleteFavorite(favorite.id)));
}