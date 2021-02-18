import React from 'react';
import { Link } from 'react-router-dom';

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