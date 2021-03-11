import React from 'react';
import { Link } from 'react-router-dom';

const TagItem = (props) => {
    const _handleDelete = (e) => {
        e.preventDefault();
        props.deleteTag(props.taggedPhoto.id);
    }


    let deleteIcon = <div></div>;
    if (props.currentUserId === props.ownerId) {
        deleteIcon = <i onClick={_handleDelete} className="fas fa-times"></i>
    }

    return (
        <li className="tag-list-item">
            {deleteIcon}
            <Link to={`/tag/${props.tag.id}`}>{props.tag.name}</Link>
        </li>
    )
}

export default TagItem;
