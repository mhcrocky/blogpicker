import React from 'react';
import PhotoIndexItem from './photo_index_item';


class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false};
        this.loadedList = 0;
        this.handleLoading = this.handleLoading.bind(this);
        this.interval;
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchAllPhotos();
        const check = this.loadedCheck.bind(this);
        this.interval = setInterval(() => { check() }, 500);
    }

    componentWillUnmount() {
        //Fixes bug where user navigates away from page before setInterval
        //has been cleared
        clearInterval(this.interval);
    }
    
    handleLoading() {
        this.loadedList++;
    }

    loadedCheck () {
        const photos = this.props.photos
        const loadAmount = photos.length > 5 ? 5 : photos.length;
        if (loadAmount <= this.loadedList) {
            this.setState({ loaded: true });
            clearInterval(this.interval);
        }
    }

    render() {
        let content;
        const photos = this.props.photos;
        const propLength = photos.length;
        const loadAmount = propLength > 5 ? 5 : propLength;
        if (loadAmount <= this.loadedList) {
            content = photos.map((photo) => {
                return (
                    <PhotoIndexItem
                        key={photo.id}
                        photo={photo}
                        user={this.props.users[photo.userId]}
                        loading={this.handleLoading}/>
                )
            })
        } else {
            
            content = <div className="loader" >
                        <div className="secret-load">
                            {photos.map((photo) => {
                                return (
                                    <PhotoIndexItem
                                        key={photo.id}
                                        photo={photo}
                                        user={this.props.users[photo.userId]}
                                        loading={this.handleLoading} />
                                )
                            })}
                        </div>
                    </div>
        }
        
        return(
            <>
                <ul className="photo-index">
                    {content}
                </ul>
            </>
        )
    }
}

export default PhotoIndex;