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

    render() {
        let tagForm = <div></div>;
        if (this.props.currentUserId === this.props.ownerId) {
            tagForm = <div className="tag-form-container">
                <form>
                    <i class="fas fa-plus"></i>
                    <input value={this.state.name} onChange={this.handleChange}
                    type="text" placeholder="Add a tag..."/>
                </form>
            </div>
        }


        return(
            <div className="main-tag-container">
                <h1>Tags</h1>

            </div>
        )
    }
}

export default TagComponent;