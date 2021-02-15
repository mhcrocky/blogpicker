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
                    <Link>{photo.title}</Link>
                    <Link to={`/users/${photo.userId}`}>{username}</Link>
                </div>
                <img src={photo.photoUrl} alt={`${username}'s photo`}/>
            </li>

        )
    }
}

export default PhotoIndexItem;