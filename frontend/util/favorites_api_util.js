export const createFavorite = (favorite) => {
    return $.ajax({
        url: '/api/favorites',
        method: 'POST',
        data: {favorite}
    })
}

export const fetchFavorites = () => {
    return $.ajax({
        url: '/api/favorites',
        method: 'get'
    })
}

export const deleteFavorite = (id) => {
    return $.ajax({
        url: `/api/favorites/${id}`,
        method: 'DELETE'
    })
}