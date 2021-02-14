import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <div className="user-show-page">
                <HeaderContainer />
                <div className="user-show-container">
                    <PhotoIndexContainer user={this.props.user} />
                </div>
            </div>
        )
    }
}

export default UserShow;