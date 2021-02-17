import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = (props) => {
    const album = props.album
    if (!album) return null;

    return (
        <li>
            <Link>{album.title}</Link>
            <div></div>
            <div>{album.description}</div>
        </li>
    )
}

export default AlbumIndexItem;