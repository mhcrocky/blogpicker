import React from 'react';

class TagComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
        this.handleChange = this.handleChange.bind(this);
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
    }

    render() {
        let tagForm = <div></div>;
        if (this.props.currentUserId === this.props.ownerId) {
            tagForm = <div className="tag-form-container">
                <form>
                    <input value={this.state.name} onChange={this.handleChange}
                    type="text" placeholder="Add a tag..."/>
                    <i class="fas fa-plus"></i>
                </form>
            </div>
        }


        return(
            <div className="main-tag-container">
                <div className="tags-header">
                    <h1>Tags</h1>
                    {tagForm}
                </div>

            </div>
        )
    }
}

export default TagComponent;