export const createAlbum = (album) => {
    return $.ajax({
        url: '/api/albums',
        method: 'POST',
        data: {album}
    })
}

export const fetchAllAlbums = () => {
    return $.ajax({
        url: '/api/albums',
        method: 'GET'
    })
}

export const fetchAlbum = (albumId) => {
    return $.ajax({
        url: `/api/albums/${albumId}`,
        method: 'GET'
    })
}

export const deleteAlbum = (albumId) => {
    return $.ajax({
        url: `/api/albums/${albumId}`,
        method: 'DELETE'
    })
}