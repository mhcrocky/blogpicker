export const createTaggedPhoto = (tagged_photo) => {
    return $.ajax({
        url: '/api/tagged_photos',
        method: 'POST',
        data: {tagged_photo}
    })
}

export const fetchTaggedPhotos = () => {
    return $.ajax({
        url: '/api/tagged_photos',
        method: 'GET'
    })
}

export const deleteTaggedPhoto = (id) => {
    return $.ajax({
        url: `/api/tagged_photos/${id}`,
        method: 'DELETE'
    })
}