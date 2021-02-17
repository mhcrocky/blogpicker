import { createAlbum } from "../../actions/album_actions";
import AlbumForm from "./album_form";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.album
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAlbum = (album) => dispatch(createAlbum(album))
    }
}

const AlbumFormContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
export default AlbumFormContainer;