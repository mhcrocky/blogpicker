import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class AlbumShow extends React.Component {
    componentDidMount() {
        this.props.fetchPhotosAlbums();
        this.props.fetchAlbum();
    }

    render() {
        const album = this.props.album;
        const photoIds = this.props.photoIds.length;
        if (!album || photoIds === 0) return null;

        return (
            <div className="alb-show-page">
                <HeaderContainer />
                <div className="alb-show-content">
                    <div className="alb-show-details">
                        <h1>{album.title}</h1>
                        <p>{album.description}</p>
                    </div>
                    {/* Photo index will go here? */}
                    <PhotoIndexContainer photoIds={this.props.photoIds} />
                </div>
            </div>
        )
    }
}

export default AlbumShow;