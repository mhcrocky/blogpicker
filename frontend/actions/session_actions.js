import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

//regular actions

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

//thunk action creators

export const login = (user) => (dispatch) => {
    return APIUtil.login(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .fail((errors) => dispatch(receiveErrors(errors)))
}

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .fail((errors) => dispatch(receiveErrors(errors)))
}

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail((errors) => dispatch(receiveErrors(errors)))
}