import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = (props) => {
    const photo = props.photo;
    const username = props.user.username;
    const onTrigger = (e) => {
        props.loading();
        e.preventDefault();
    }
    return (
        <li onLoad={onTrigger} className="photo-item-container">
            <div className="photo-details">
                <div>{photo.title}</div>
                <div>by {username}</div>
            </div>
            <Link to={`/photos/${photo.id}`}>
                <img src={photo.photoUrl} alt={photo.title}/>
            </Link>
        </li>
    )
}

export default PhotoIndexItem;