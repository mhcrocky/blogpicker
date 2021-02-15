import React from 'react';
import HeaderContainer from '../header/header_container';

class PhotoShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhoto()
            .then(() => 
                this.props.fetchUser(this.props.photo.userId)
            )
        
    }

    render() {
        const photo = this.props.photo;
        const src = photo ? photo.photoUrl : "";
        const title = photo ? photo.title : "";
        const description = photo ? photo.description : "";
        const username = photo ? this.props.user[photo.userId].username : "";
        let buttons = <div></div>;
        if (photo && this.props.currentUserId === photo.userId) {
            buttons = <div className="delete-update-photo">
                <button className="delete-photo">Delete Photo</button>
                <button className="update-photo">Update Photo</button>
            </div>
        }

        return (
            <div className="photo-show-page">
                <HeaderContainer />
                <div className="photo-show-body">
                    <div className="image-container">
                        <img src={src} alt={title}/>
                    </div>
                    <div className="photo-info-container">
                        <div className="photo-info-content">
                            <div className="photo-title-desc-delete">
                                <div>
                                    <div className="photo-title-desc"></div>
                                    <h1>{title}</h1>
                                    <div>A photo by {username}</div>
                                    <div className="photo-description">
                                        <label>Description</label>
                                        <div>{description}</div>
                                    </div>
                                </div>
                                {buttons}
                            </div>
                            <div className="photo-comments">Comments will go here...</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoShow;