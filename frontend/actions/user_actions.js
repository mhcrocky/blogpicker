import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

//regular actions

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
}

//thunk actions

export const fetchUser = (userId) => (dispatch) => {
    return APIUtil.fetchUser(userId)
        .then((user) => {
            dispatch(receiveUser(user));
        })
}

export const fetchAllUsers = () => (dispatch) => {
    return APIUtil.fetchAllUsers()
        .then((users) => {
            dispatch(receiveAllUsers(users));
        })
}