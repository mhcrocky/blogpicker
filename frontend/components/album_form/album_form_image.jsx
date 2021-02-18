import React from 'react';

const AlbumFormImage = (props) => {
    const photo = props.photo;

    return (
        <img src={photo.photoUrl} alt={photo.title}/> 
    )
}

export default AlbumFormImage;