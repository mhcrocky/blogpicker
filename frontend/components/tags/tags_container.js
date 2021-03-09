import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deleteTaggedPhoto, newTaggedPhoto, receiveTaggedPhotos } from "../../actions/tagged_photo_actions";
import { fetchAllTags, newTag } from "../../actions/tag_actions";
import TagComponent from "./tags_component";

const mapStateToProps = (state, ownProps) => {
    let tagIds = [];
    const taggedPhotos = state.entities.taggedPhotos;
    const photoId = parseInt(ownProps.match.params.id);

    if (taggedPhotos !== undefined) {
        Object.values(taggedPhotos).forEach(taggedPhoto => {
            if (taggedPhoto.photoId === photoId) {
                tagIds.push(taggedPhoto.tagId);
            }
        })
    }

    let tags = [];
    const tagsState = state.entities.tags;
    if (tagsState !== undefined) {
        tagIds.forEach(tagId => tags.push(tagsState[tagId]));
    }

    return {
        tags,
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        newTag: (tag) => dispatch(newTag(tag)),
        fetchAllTags: () => dispatch(fetchAllTags()),
        newTaggedPhoto: (taggedPhoto) => dispatch(newTaggedPhoto(taggedPhoto)),
        receiveTaggedPhotos: () => dispatch(receiveTaggedPhotos()),
        deleteTaggedPhoto: (id) => dispatch(deleteTaggedPhoto(id))
    }
}

const TagsContainer = connect(mapStateToProps, mapDispatchToProps)(TagComponent);
export default withRouter(TagsContainer);