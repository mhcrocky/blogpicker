//fetch user ajax request

export const fetchUser = (userId) => {
    return $CombinedState.ajax({
        url: `/api/users/${userId}`,
        method: 'GET'
    })
}

export const fetchDemo = () => 