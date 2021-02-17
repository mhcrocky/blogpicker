import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class AlbumShow extends React.Component {
    componentDidMount() {
        this.props.fetchAlbum();
    }

    render() {
        const album = this.props.album

        return (
            <div className="alb-show-page">
                <HeaderContainer />
                <div className="alb-show-content">
                    <div className="alb-show-details">
                        <h1>{album.title}</h1>
                        <p>{album.description}</p>
                    </div>
                    <PhotoIndexContainer album={album} />
                </div>
            </div>
        )
    }
}

export default AlbumShow;