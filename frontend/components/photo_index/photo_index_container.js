import { connect } from "react-redux";
import { fetchAllPhotos } from "../../actions/photo_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import PhotoIndex from "./photo_index";

const mapStateToProps = (state, ownProps) => {
    
    const userId = ownProps.user ? ownProps.user.id : null;
    const photoIds = ownProps.photoIds ? ownProps.photoIds : null;

    let photos = [];
    if (userId) {
        Object.values(state.entities.photos).forEach((photo) => {
            if (photo.userId === userId) photos.push(photo);
        }) 
    } else if (photoIds) {
        photoIds.forEach((id) => {
            photos.push(state.entities.photos[id]);
        })
    } else {
        photos = Object.values(state.entities.photos);
    }
    
    return {
        users: state.entities.users,
        photos: photos.reverse() //arr of photo objects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllPhotos: () => dispatch(fetchAllPhotos())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);