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
            <li>
                <div>{photo.title}</div>
                <div>{username}</div>
            </li>
        )
    }
}

export default PhotoIndexItem;