import React from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import { Link } from 'react-router-dom';
import AlbumIndexContainer from '../album_index/album_index_container';

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
        if (!user) return null;

        const username = user.username 
        const userId = user.id 

        if (path === "/users/:id/albums") {
            content = <AlbumIndexContainer userId={user.id} />;
            albums = "selected";
            photoStream = "";
        } else {
            content = <PhotoIndexContainer user={user} />;
            albums = "";
            photoStream = "selected";
        }


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