import React from 'react';
import AlbumIndexItem from './album_index_item';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllAlbums();
    }

    render() {
        
        const indexItems = this.props.albums.map((album) => {
            return (
                <AlbumIndexItem key={album.id} album={album} />
            )
        })

        return (
            <div className="album-index-page">
                <div className="album-index-content">
                    <div className="album-index-header">
                        <Link to="/album/new">Create an Album</Link>
                    </div>
                    <ul>
                        {indexItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default AlbumIndex;