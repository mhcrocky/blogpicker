import React from 'react';

const CommentItem = (props) => {
    return (
        <li>
            <div>{props.user.username}</div>
            <div>{props.comment.body}</div>
        </li>
    )
}

export default CommentItem;