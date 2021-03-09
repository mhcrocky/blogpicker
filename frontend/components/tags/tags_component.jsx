import React from 'react';

class TagComponent extends React.Component {
    
    render() {
        let tagForm = <div></div>;
        if (this.props.currentUserId === this.props.ownerId) {
            tagForm = <div className="tag-form-container">
                <form>
                    <input type="text" placeholder="Add a tag..."/>
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