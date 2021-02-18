import { createAlbum } from "../../actions/album_actions";
import AlbumForm from "./album_form";
import { connect } from "react-redux";
import { fetchAllPhotos } from "../../actions/photo_actions"
import { createPhotosAlbum } from "../../actions/photos_album_actions";

const mapStateToProps = (state) => {
    const userId = state.session.currentUserId;
    let photos = [];
    Object.values(state.entities.photos).forEach(photo => {
        if (photo.userId === userId) photos.push(photo);
    })

    return {
        errors: state.errors.album,
        photos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAlbum: (album) => dispatch(createAlbum(album)),
        fetchAllPhotos: () => dispatch(fetchAllPhotos()),
        createPhotosAlbum: (pA) => dispatch(createPhotosAlbum(pA))
    }
}

const AlbumFormContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
export default AlbumFormContainer;