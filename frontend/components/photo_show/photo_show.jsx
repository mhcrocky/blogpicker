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

        return (
            <div className="photo-show-page">
                <HeaderContainer />
                <div className="photo-show-body">
                    <div className="image-container">
                        <img src={src} alt={title}/>
                    </div>
                    <div className="photo-info-container">
                        <div className="photo-info-content">
                            <div>{username}</div>
                            <div>{title}</div>
                            <div>{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoShow;