import { connect } from "react-redux"
import { fetchPhoto } from "../../actions/photo_actions";
import { fetchUser } from "../../actions/user_actions"

const mapStateToProps = (state, ownProps) => {
    const photo = state.entities.photos[ownProps.match.params.id];

    return {
        user: state.entities.user[photo.userId],
        photo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const photo = state.entities.photos[ownProps.match.params.id]

    return {
        fetchUser: () => dispatch(fetchUser(photo.userId)),
        fetchPhoto: () => dispatch(fetchPhoto(photo.id))
    }
}

const PhotoShowContainer = connect(mapStateToProps, mapDispatchToProps)