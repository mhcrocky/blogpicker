import React from 'react';

const AlbumFormImage = (props) => {
    const photo = props.photo;

    return (
        <img className="album-form-image" src={photo.photoUrl} alt={photo.id}/> 
    )
}

export default AlbumFormImage;