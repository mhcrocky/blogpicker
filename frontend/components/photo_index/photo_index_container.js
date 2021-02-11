import { connect } from "react-redux"
import { fetchAllPhotos } from "../../actions/photo_actions"
import PhotoIndex from "./photo_index"

const mapStateToProps = (state) => {
    return {
        users: state.entities.users,
        photos: Object.values(state.entities.photos) //arr of photo objects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPhotos: () => dispatch(fetchAllPhotos())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);