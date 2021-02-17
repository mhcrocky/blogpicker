

export const createPhotosAlbum = (photos_album) => {
    return $.ajax({
        url: '/api/photos_albums',
        method: 'POST',
        data: {photos_album}
    })
}

export const fetchPhotosAlbums = () => {
    return $.ajax({
        url: '/api/photos_albums',
        method: 'GET'
    })
}