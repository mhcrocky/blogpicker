import * as APIUtil from '../util/comment_api_util';

export const RECEIEVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

//regular actions

const receiveAllComments = (comments) => {
    return {
        type: RECEIEVE_ALL_COMMENTS,
        comments
    }
}

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

//thunk action creators

export const fetchAllComments = () => (dispatch) => {
    return APIUtil.fetchComments()
        .then(comments => {
            dispatch(receiveAllComments(comments));
        })
}

export const createComment = (comment) => (dispatch) => {
    return APIUtil.createComment(comment)
        .then(comment => {
            dispatch(receiveComment(comment));
        })
}

export const deleteComment = (commentId) => (dispatch) => {
    return APIUtil.deleteComment(commentId)
        .then(commentId => {
            dispatch(removeComment(commentId));
        })
}