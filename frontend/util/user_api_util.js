//fetch user ajax request

export const fetchUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET'
    })
}

export const fetchAllUsers = () => {
    return $.ajax({
        url: '/api/users',
        method: 'GET'
    })
}