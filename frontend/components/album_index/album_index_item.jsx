import React from 'react';

const AlbumIndexItem = (props) => {
    const album = props.album
    if (!album) return null;

    return (
        <>
            <h1>{album.title}</h1>
            <div>{album.description}</div>
        </>
    )
}

export default AlbumIndexItem;