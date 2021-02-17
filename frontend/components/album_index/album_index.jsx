import React from 'react';
import AlbumIndexItem from './album_index_item';

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
            <ul>
                {indexItems}
            </ul>
        )
    }
}

export default AlbumIndex;