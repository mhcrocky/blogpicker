import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return(
            <div className="user-show-page">
                <HeaderContainer />
                <div className="user-show-container">
                    <div className="user-header">
                        <div className="user-header-content">
                            <h1>
                                Welcome to {this.props.user.username}'s Picktr Page
                            </h1>
                            <div className="user-nav">
                                <Link to={`/users/${this.props.user.id}`}>
                                    Photo Stream
                                </Link>
                                <Link to={`/users/${this.props.user.id}/albums`}>
                                    Albums
                                </Link>
                            </div>
                        </div>
                    </div>
                    <PhotoIndexContainer user={this.props.user} />
                </div>
            </div>
        )
    }
}

export default UserShow;