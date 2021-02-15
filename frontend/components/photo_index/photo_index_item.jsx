import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.photo.userId);
    }

    render() {
        const photo = this.props.photo;
        const users = this.props.users;
        const username = users[photo.userId] ? users[photo.userId].username : "";

        return (
            <li className="photo-item-container">
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
}

export default PhotoIndexItem;