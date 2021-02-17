import { connect } from 'react-redux';
import {fetchAllAlbums} from '../../actions/album_actions';
import AlbumIndex from './album_index';


const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.match.params.id;
    let albums = [];
    Object.values(state.entities.albums).forEach((album) => {
        if (album.userId === userId) albums.push(album);
    })

    return {
        albums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllAlbums: () => dispatch(fetchAllAlbums())
    }
}

const AlbumIndexContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
export default AlbumIndexContainer;