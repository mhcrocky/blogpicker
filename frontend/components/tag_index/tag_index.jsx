import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class TagIndex extends React.Component {

    componentDidMount() {
        this.props.fetchATag();
        this.props.receiveTaggedPhotos();
    }

    render() {
        if (!this.props.tag) return null;

        return (
            <div className="feed-page">
                <HeaderContainer />
                <div className="feed-body">
                    <h1>Tag #{this.props.tag.name}</h1>
                    <PhotoIndexContainer photoIds={this.props.photoIds} />
                </div>
            </div>
        )
    }
}

export default TagIndex;