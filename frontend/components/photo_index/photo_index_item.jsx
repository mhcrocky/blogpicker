import React from 'react';


const PhotoIndexItem = (props) => {
    const photo = props.photo;
    const user = props.user;

    return (
        <li>
            <div>{photo.title}</div>
            <div>{users[photo.userId].username}</div>
        </li>
    )
}

export default PhotoIndexItem;