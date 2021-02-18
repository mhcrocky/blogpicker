import { connect } from "react-redux";
import { fetchAlbum } from "../../actions/album_actions";
import { fetchPhotosAlbums } from "../../actions/photos_album_actions";
import AlbumShow from "./album_show";

const mSTP = (state, ownProps) => {
    let photoIds = [];
    Object.values(state.entities.photosAlbums).forEach((pA) => {
        if (pA.albumId === ownProps.match.params.id) {
            photoIds.push(pA.photoId);
        }
    })

    return {
        album: state.entities.albums[ownProps.match.params.id],
        photoIds
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchAlbum: () => dispatch(fetchAlbum(ownProps.match.params.id)),
        fetchPhotosAlbums: () => dispatch(fetchPhotosAlbums())
    }
}

const AlbumShowContainer = connect(mSTP,mDTP)(AlbumShow);
export default AlbumShowContainer;