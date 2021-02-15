import { connect } from "react-redux"
import { fetchPhoto } from "../../actions/photo_actions";
import { fetchUser } from "../../actions/user_actions"
import PhotoShow from "./photo_show";

const mapStateToProps = (state, ownProps) => {
    const photo = state.entities.photos[ownProps.match.params.id];

    return {
        user: state.entities.users,
        photo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const photoId = ownProps.match.params.id

    return {
        fetchUser: (id) => dispatch(fetchUser(id)),
        fetchPhoto: () => dispatch(fetchPhoto(photoId))
    }
}

const PhotoShowContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
export default PhotoShowContainer;