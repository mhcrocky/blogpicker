import { connect } from "react-redux";
import { deleteComment, fetchAllComments } from "../../actions/comment_actions";
import { deletePhoto, fetchPhoto } from "../../actions/photo_actions";
import { fetchAllFavorites, newFavorite, removeFavorite } from "../../actions/favorite_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import PhotoShow from "./photo_show";

const mapStateToProps = (state, ownProps) => {
    const photoId = ownProps.match.params.id
    const photo = state.entities.photos[photoId];
    const commentsState = state.entities.comments;
    const favorites = state.entities.favorites;
    const currentUserId = state.session.currentUserId;
    let favorite = false;
    let comments = [];
    if (commentsState !== undefined) {
        Object.values(commentsState).forEach(comment => {
            if (comment.photoId === parseInt(photoId)) comments.push(comment);
        })
    }
    if (favorites !== undefined) {
        Object.values(favorites).forEach(favorite => {
            if (favorite.photoId === photoId && favorite.userId === currentUserId) {
                favorite = true;
            }
        })
    }
    return {
        comments,
        currentUserId,
        user: state.entities.users,
        photo,
        favorite
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
        newFavorite: () => dispatch(newFavorite({photo_id: photoId})),
        removeFavorite: (id) => dispatch(removeFavorite(id)),
        fetchAllFavorites: () => dispatch(fetchAllFavorites())
    }
}

const PhotoShowContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
export default PhotoShowContainer;