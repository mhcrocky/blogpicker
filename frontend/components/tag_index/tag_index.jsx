import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class TagIndex extends React.Component {

    render() {
        return (
            <div className="feed-page">
                <HeaderContainer />
                <div className="feed-body">
                    <h1></h1>
                    <PhotoIndexContainer />
                </div>
            </div>
        )
    }
}

export default TagIndex;