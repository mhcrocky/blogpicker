import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchAllPhotos } from "../../actions/photo_actions"
import { fetchUser } from "../../actions/user_actions"
import PhotoIndex from "./photo_index"

const mapStateToProps = (state, ownProps) => {
    
    const userId = ownProps.user ? ownProps.user.id : null;
    let photos;
    if (userId) {
        photos = [];
        Object.values(state.entities.photos).forEach((photo) => {
            if (photo.userId === userId) photos.push(photo);
        })
        
    } else {
        photos = Object.values(state.entities.photos);
    }
    
    return {
        users: state.entities.users,
        photos //arr of photo objects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);