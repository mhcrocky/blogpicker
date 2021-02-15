import { connect } from "react-redux"
import { createPhoto } from "../../actions/photo_actions"
import PhotoForm from "./photo_form"

const mapStateToProps = (state) => {
    return {
        errors: state.errors.photo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPhoto: (photo) => dispatch(createPhoto(photo))
    }
}

const PhotoFormContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoForm);

export default PhotoFormContainer;