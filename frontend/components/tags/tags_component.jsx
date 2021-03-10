import React from 'react';
import TagItem from './tag_item';

class TagComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchAllTags()
            .then(() => this.props.receiveTaggedPhotos());
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const photoId = parseInt(this.props.match.params.id);
        const existingTags = this.props.allTags;
        let currentTag = this.state.name;
        if (existingTags !== undefined) {
            Object.values(existingTags).forEach(tag => {
                if (tag.name === currentTag) {
                    currentTag = tag.id;
                }
            })
        }
        if (typeof currentTag === 'string') {
            let info = {name: currentTag}
            this.props.newTag(info)
                .then(action => {
                    const tagId = action.tag.id;
                    const data = {photo_id: photoId, tag_id: tagId};
                    this.props.newTaggedPhoto(data);
                    this.setState({name: ""});
                })
        } else {
            let tagInfo = {photo_id: photoId, tag_id: currentTag};
            this.props.newTaggedPhoto(tagInfo)
                .then(() => this.setState({name: ""}));
        }
    }

    render() {
        let tagForm = <div></div>;
        if (this.props.currentUserId === this.props.ownerId) {
            tagForm = <div className="tag-form-container">
                <form>
                    <input value={this.state.name} onChange={this.handleChange}
                    type="text" placeholder="Add a tag..."/>
                    <i onClick={this.handleSubmit} className="fas fa-plus"></i>
                </form>
            </div>
        }

        const tags = this.props.tags.map(tag => {
            const taggedPhoto = this.props.tagAssociation[tag.id];
            return (
                <TagItem key={tag.id} taggedPhoto={taggedPhoto} tag={tag}
                currentUserId={this.props.currentUserId} ownerId={this.props.ownerId}
                deleteTag={this.props.deleteTaggedPhoto} />
            )
        })

        return(
            <div className="main-tag-container">
                <div className="tags-header">
                    <h1>Tags</h1>
                    {tagForm}
                </div>
                <ul className="tag-list">
                    {tags}
                </ul>
            </div>
        )
    }
}

export default TagComponent;