import { createPhoto } from "../../actions/photo_actions"

const mapDispatchToProps = (dispatch) => {
    return {
        createPhoto = (photo) => dispatch(createPhoto(photo))
    }
}