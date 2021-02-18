import { connect } from "react-redux";
import { fetchAllPhotos } from "../../actions/photo_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import PhotoIndex from "./photo_index";

const mapStateToProps = (state, ownProps) => {
    
    const userId = ownProps.user ? ownProps.user.id : null;
    const photoIds = ownProps.photoIds ? ownProps.photoIds : null;
    const photosState = state.entities.photos;

    let photos = [];
    if (userId) {
        Object.values(photosState).forEach((photo) => {
            if (photo.userId === userId) photos.push(photo);
        }) 
    } else if (photoIds) {
        debugger
        if (Object.values(photosState) === 0) {
            photos = undefined;
        } else {
            photoIds.forEach((id) => {
                photos.push(photosState[id]);
            })
        }
    } else {
        photos = Object.values(photosState);
    }
    
    return {
        users: state.entities.users,
        photos: photos.reverse() //see most recent image first
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchAllPhotos: () => dispatch(fetchAllPhotos())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);