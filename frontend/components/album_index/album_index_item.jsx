import React from 'react';

const AlbumIndexItem = (props) => {
    const album = props.album
    if (!album) return null;

    return (
        <li>
            <div>{album.title}</div>
            <div>{album.description}</div>
        </li>
    )
}

export default AlbumIndexItem;