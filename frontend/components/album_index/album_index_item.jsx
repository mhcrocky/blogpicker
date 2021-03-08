import React from 'react';

const AlbumIndexItem = (props) => {
    const album = props.album
    const photosAlbums = props.photosAlbums;
    const photos = props.photos;
    if (!album || photosAlbums.length === 0 || photos.length === 0) return null;
    
    let photoAlbum;
    photosAlbums.forEach(pA => {
        if (pA.albumId === album.id) {
            photoAlbum = pA;
        }
    })
    
    let photo;
    photos.forEach(pic => {
        if (pic.id === photoAlbum.photoId) {
            photo = pic;
        }
    })

    return (
        <>
            <h1>{album.title}</h1>
            <img className="alb-prev" src={photo.photoUrl} alt={photo.title}/>
        </>
    )
}

export default AlbumIndexItem;