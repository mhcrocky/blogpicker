import { connect } from 'react-redux';
import {fetchAllAlbums} from '../../actions/album_actions';
import AlbumIndex from './album_index';


const mapStateToProps = (state, ownProps) => {
    
    let albums = [];
    Object.values(state.entities.albums).forEach((album) => {
        if (album.userId === ownProps.userId) albums.push(album);
    })

    return {
        albums,
        currentUserId: state.session.currentUserId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllAlbums: () => dispatch(fetchAllAlbums())
    }
}

const AlbumIndexContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
export default AlbumIndexContainer;