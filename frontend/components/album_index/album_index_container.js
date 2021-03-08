import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchAllAlbums} from '../../actions/album_actions';
import { fetchPhotosAlbums } from '../../actions/photos_album_actions';
import AlbumIndex from './album_index';


const mapStateToProps = (state, ownProps) => {
    
    let albums = [];
    Object.values(state.entities.albums).forEach((album) => {
        if (album.userId === ownProps.userId) albums.push(album);
    })
    let pAs = state.entities.photosAlbums
    let photosAlbums = pAs ? Object.values(pAs) : [];
    return {
        albums,
        photosAlbums,
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhotosAlbums: () => dispatch(fetchPhotosAlbums()),
        fetchAllAlbums: () => dispatch(fetchAllAlbums())
    }
}

const AlbumIndexContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
export default withRouter(AlbumIndexContainer);