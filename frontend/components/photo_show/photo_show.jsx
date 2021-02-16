import React from 'react';
import HeaderContainer from '../header/header_container';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhoto()
            .then(() => 
                this.props.fetchUser(this.props.photo.userId)
            );
    }
        

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id != this.props.match.params.id) {
            this.props.fetchPhoto()
            .then(() =>
            this.props.fetchUser(this.props.photo.userId)
            )
            .fail(() => (
                this.props.history.push('/404')
                ))
        }
    }
    
    handleDelete(e) {
        e.preventDefault();
        this.props.deletePhoto(this.props.match.params.id)
            .then(() => (
                this.props.history.goBack()
            ))
    }
        
    goBack() {
        this.props.history.goBack();
    }


    render() {
        const photo = this.props.photo;
        const src = photo ? photo.photoUrl : "";
        const title = photo ? photo.title : "";
        const description = photo ? photo.description : "";
        const userId = photo ? photo.userId : "";
        const username = photo ? this.props.user[userId].username : "";
        
        let buttons = <div></div>;
        if (photo && this.props.currentUserId === userId) {
            buttons = <div className="delete-update-photo">
                <button onClick={this.handleDelete} className="delete-photo">
                    Delete Photo
                </button>
                <button className="update-photo">Update Photo</button>
            </div>
        }



        return (
            <div className="photo-show-page">
                <HeaderContainer />
                <div className="photo-show-body">
                    <div className="image-container">
                        <i onClick={this.goBack} className="fas fa-arrow-left"></i>
                        <img src={src} alt={title}/>
                    </div>
                    <div className="photo-info-container">
                        <div className="photo-info-content">
                            <div className="photo-title-desc-delete">
                                <div>
                                    <div className="photo-title-desc"></div>
                                    <h1>{title}</h1>
                                    <div>A photo by 
                                        <Link to={`/users/${userId}`}> {username}</Link>
                                    </div>
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