import { connect } from "react-redux";
import { fetchATag } from "../../actions/tag_actions";
import TagIndex from "./tag_index";

const mSTP = (state, ownProps) => {
    const tagId = parseInt(ownProps.match.params.id);
    const taggedPhotos = state.entities.taggedPhotos;
    let photoIds = [];
    if (taggedPhotos !== undefined) {
        Object.values(taggedPhotos).forEach(taggedPhoto => {
            if (taggedPhoto.tagId === tagId) {
                photoIds.push(taggedPhoto.photoId);
            }
        })
    }

    return {
        tag: state.entities.tags[tagId],
        photoIds
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        receiveTaggedPhotos: () => dispatch(receiveTaggedPhotos()),
        fetchATag: () => dispatch(fetchATag(ownProps.match.params.id))
    }
}

const TagIndexContainer = connect(mSTP, mDTP)(TagIndex);
export default TagIndexContainer;