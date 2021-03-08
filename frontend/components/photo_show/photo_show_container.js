import { connect } from "react-redux";
import { deleteComment, fetchAllComments } from "../../actions/comment_actions";
import { deletePhoto, fetchPhoto } from "../../actions/photo_actions";
import { fetchAllUsers } from "../../actions/user_actions"
import PhotoShow from "./photo_show";

const mapStateToProps = (state, ownProps) => {
    const photoId = ownProps.match.params.id
    const photo = state.entities.photos[photoId];
    const commentsState = state.entities.comments;
    let comments = [];
    if (commentsState !== undefined) {
        Object.values(commentsState).forEach(comment => {
            if (comment.photoId === parseInt(photoId)) comments.push(comment);
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
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        fetchComments: () => dispatch(fetchAllComments()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchPhoto: () => dispatch(fetchPhoto(photoId)),
        deletePhoto: (id) => dispatch(deletePhoto(id)),
    }
}

const PhotoShowContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
export default PhotoShowContainer;