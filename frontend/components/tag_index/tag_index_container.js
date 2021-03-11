
const mSTP = (state, ownProps) => {
    const tagId = parseInt(ownProps.match.params.id);
    const taggedPhotos = state.entities.taggedPhotos;
    let photoIds = [];
    if (taggedPhotos !== undefined) {
        Object.values(taggedPhotos).forEach(taggedPhoto => {
            if (taggedPhoto.tagId === tagId)
        })
    }

    return {
        tag: state.entities.tags[tagId],
        photoIds
    }
}