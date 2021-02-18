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
                <div className="alb-show-container">
                    <div className="alb-show-details">
                        <div className="alb-show-content">
                            <div className="alb-show-icons">
                                <div onClick={() => this.props.history.goBack()}
                                className="alb-go-back">
                                    <i className="fas fa-arrow-left"></i>
                                    <div>
                                        Back to Albums
                                    </div>
                                </div>
                                <button className="delete-alb">
                                    Delete Album
                                </button>
                            </div>
                            <h1>{album.title}</h1>
                            <div>Description</div>
                            <p>{album.description}</p>
                        </div>
                    </div>
                    <PhotoIndexContainer photoIds={this.props.photoIds} />
                </div>
            </div>
        )
    }
}

export default AlbumShow;