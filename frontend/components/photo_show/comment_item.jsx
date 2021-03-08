import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = (props) => {
    const user = props.user;

    return (
        <li>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
            <div>{props.comment.body}</div>
        </li>
    )
}

export default CommentItem;