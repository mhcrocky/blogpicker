import { connect } from "react-redux"
import { createPhoto } from "../../actions/photo_actions"
import PhotoForm from "./photo_form"

const mapDispatchToProps = (dispatch) => {
    return {
        createPhoto = (photo) => dispatch(createPhoto(photo))
    }
}

const PhotoFormContainer = connect(null, mapDispatchToProps)(PhotoForm);

export default PhotoFormContainer;