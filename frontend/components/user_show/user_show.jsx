import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const user = this.props.user;
        const path = this.props.match.path;
        let content;
        let photoStream;
        let albums;

        if (path === "/users/:id/albums") {
            content = <div>Albums Index Goes here</div>;
            albums = "selected";
            photoStream = "";
        } else {
            content = <PhotoIndexContainer user={user} />;
            albums = "";
            photoStream = "selected";
        }

        const username = user ? user.username : "";
        const userId = user ? user.id : "";

        return(
            <div className="user-show-page">
                <HeaderContainer />
                <div className="user-show-container">
                    <div className="user-header">
                        <div className="user-header-content">
                            <h1>
                                Welcome to {username}'s Picktr Page
                            </h1>
                            <div className="user-nav">
                                <Link className={photoStream}
                                to={`/users/${userId}`}>
                                    Photo Stream
                                </Link>
                                <Link className={albums}
                                to={`/users/${userId}/albums`}>
                                    Albums
                                </Link>
                            </div>
                        </div>
                    </div>
                    {content}
                </div>
            </div>
        )
    }
}

export default UserShow;