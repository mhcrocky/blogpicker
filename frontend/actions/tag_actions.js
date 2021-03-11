import { createTag, fetchTags, fetchTag } from "../util/tag_api_util";

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS';

//regular actions

const receiveTag = (tag) => {
    return {
        type: RECEIVE_TAG,
        tag
    }
}

const receiveAllTags = (tags) => {
    return {
        type: RECEIVE_ALL_TAGS,
        tags
    }
}

//thunks

export const newTag = (tag) => (dispatch) => {
    return createTag(tag)
        .then(tag => dispatch(receiveTag(tag)));
}

export const fetchAllTags = () => (dispatch) => {
    return fetchTags()
        .then(tags => dispatch(receiveAllTags(tags)));
}

export const fetchATag = (id) => (dispatch) => {
    return fetchTag(id)
        .then(tag => dispatch(receiveTag(tag)));
}