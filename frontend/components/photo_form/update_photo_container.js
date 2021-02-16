import { connect } from "react-redux";
import { fetchPhoto, updatePhoto } from "../../actions/photo_actions";
import UpdatePhoto from "./update_photo";

const mapStateToProps = (state, ownProps) => {
    return {
        photo: state.entities.photos[ownProps.match.params.id],
        errors: state.errors.photo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const photoId = ownProps.match.params.id

    return {
        fetchPhoto: () => dispatch(fetchPhoto(photoId)),
        updatePhoto: (photo) => dispatch(updatePhoto(photo))
    }
}

const UpdatePhotoContainer = connect(mapStateToProps, mapDispatchToProps)(UpdatePhoto);
export default UpdatePhotoContainer;