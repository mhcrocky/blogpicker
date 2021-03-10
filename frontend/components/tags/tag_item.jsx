import React from 'react';

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
        <li>
            {deleteIcon}
            <div>{props.tag.name}</div>
        </li>
    )
}

export default TagItem;