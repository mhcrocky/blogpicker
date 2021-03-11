export const createTag = (tag) => {
    return $.ajax({
        url: '/api/tags',
        method: 'POST',
        data: {tag}
    })
}

export const fetchTags = () => {
    return $.ajax({
        url: '/api/tags',
        method: 'GET'
    })
}

export const fetchTag = (id) => {
    return $.ajax({
        url: `/api/tags/${id}`,
        method: 'GET'
    })
}