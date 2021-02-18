import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {

    render() {
        const photo = this.props.photo;
        const username = this.props.user.username;

        return (
            <li className="photo-item-container">
                <div className="photo-details">
                    <div>{photo.title}</div>
                    <div>by {username}</div>
                </div>
                <Link to={`/photos/${photo.id}`}>
                    <img loading="lazy" src={photo.photoUrl} alt={photo.title}/>
                </Link>
            </li>

        )
    }
}

export default PhotoIndexItem;