import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";


//regular actions

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

//thunk actions

export const fetchUser = (userId) => (dispatch) => {
    return APIUtil.fetchUser(userId)
        .then((user) => {
            dispatch(receiveUser(user));
        })
}

export const fetchDemo = () => (dispatch) => {
    return APIUtil.fetchDemo()
        .then((demo) => {
            dispatch(receiveUser(demo))
        })
}