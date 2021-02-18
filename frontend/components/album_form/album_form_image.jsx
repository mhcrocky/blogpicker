import React from 'react';

const AlbumFormImage = (props) => {
    const photo = props.photo;

    return (
        <li className="album-form-image">
            <img src={photo.photoUrl} alt={photo.title}/>
        </li>
    )
}

export default AlbumFormImage;