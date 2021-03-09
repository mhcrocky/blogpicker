export const createTag = (tag) => {
    return $.ajax({
        url: '/api/tags',
        method: 'POST',
        data: {tag}
    })
}

export const fetchTags = () => {
    return $.ajax({
        url: 'api/tags',
        method: 'GET'
    })
}