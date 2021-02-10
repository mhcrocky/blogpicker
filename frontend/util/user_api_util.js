//fetch user ajax request

export const fetchUser = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET'
    })
}

export const fetchDemo = () => {
    return $.ajax({
        url: '/api/users/demo_user',
        method: 'GET'
    })
}