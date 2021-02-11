import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class Feed extends React.Component {

    render () {
        return (
            <div className="feed-page">
                <HeaderContainer />
                <h1>PhotoIndex Goes Here!</h1>
                <PhotoIndexContainer />
            </div>
        )
    }
}

export default Feed;