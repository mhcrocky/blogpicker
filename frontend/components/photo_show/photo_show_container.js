import { connect } from "react-redux";
import { fetchAllComments } from "../../actions/comment_actions";
import { deletePhoto, fetchPhoto } from "../../actions/photo_actions";
import { fetchUser } from "../../actions/user_actions"
import PhotoShow from "./photo_show";

const mapStateToProps = (state, ownProps) => {
    const photoId = ownProps.match.params.id
    const photo = state.entities.photos[photoId];
    const commentsState = state.entities.comments;
    let comments = [];
    if (commentsState) {
        Object.values(commentsState).forEach(comment => {
            if (comment.photoId === photoId) comments.push(comment);
        })
    }
    return {
        comments,
        currentUserId: state.session.currentUserId,
        user: state.entities.users,
        photo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const photoId = ownProps.match.params.id

    return {
        fetchComments: () => dispatch(fetchAllComments()),
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchPhoto: () => dispatch(fetchPhoto(photoId)),
        deletePhoto: (id) => dispatch(deletePhoto(id)),
    }
}

const PhotoShowContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
export default PhotoShowContainer;