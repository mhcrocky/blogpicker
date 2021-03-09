import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = (props) => {
    const handleDelete = () => {
        props.deleteComment(props.comment.id);
    }

    const user = props.user;
    let deleteIcon = <div></div>;
    if (props.currentId === user.id) {
        deleteIcon = <i onClick={handleDelete} className="fas fa-times"></i>;
    }

    return (
        <li>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
            <div className="comment-body">
                <div>{props.comment.body}</div>
                {deleteIcon}
            </div>
        </li>
    )
}

export default CommentItem;