import React from 'react';


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
                <div>{photo.title}</div>
                <div>{username}</div>
                <img src={photo.photoUrl} alt={`${username}'s photo`}/>
            </li>
        )
    }
}

export default PhotoIndexItem;