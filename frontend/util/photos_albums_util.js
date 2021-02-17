

export const createPhotosAlbum = (photos_album) => {
    return $.ajax({
        url: '/api/photos_albums',
        method: 'POST',
        data: {photos_album}
    })
}

export const fetchPhotosAlbums = (photosAlbums) => {
    return $.ajax({
        url: '/api/photos_albums',
        method: 'GET',
        data: {photosAlbums}
    })
}