import React from 'react';

import PhotoIndexItem from './photo_index_item';


class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.loadedList = [];
        this.handleLoading = this.handleLoading.bind(this);
    }

    componentDidMount() {
        // this.setState({loading: true}, () => {
        //     Promise.all([this.props.fetchAllUsers(), this.props.fetchAllPhotos()])
        //         .then(() => (
        //             this.setState({ loading: false })
        //         ));
        // })
        this.props.fetchAllUsers();
        this.props.fetchAllPhotos();
        let interval = setInterval(() => {
            if (this.props.photos.length === this.loadedList.length) {
                this.setState({ loaded: true });
                clearInterval(interval);
            }
        }, 2000)
    }

    
    handleLoading(item) {
        this.loadedList.push(item);
    }

    render() {
        let content;

        if (this.props.photos.length <= this.loadedList.length) {
            content = this.props.photos.map((photo) => {
                return (
                    <PhotoIndexItem
                        key={photo.id}
                        photo={photo}
                        user={this.props.users[photo.userId]}/>
                )
            })
        } else {
            content = <div className="loader" >
                        {this.props.photos.map((photo) => (
                            <img className='secret-load' key={photo.id}
                            src={photo.photoUrl}
                            onLoad={this.handleLoading(photo)}/>
                        ))}
                    </div>
        }
        
        // const photos = this.props.photos.map((photo) => { 
        //     return (
        //         <PhotoIndexItem
        //             key={photo.id}
        //             photo={photo}
        //             user={this.props.users[photo.userId]}/>
        //     )
        // })
        
        // const loadingDiv = this.state.loading ? "loader" : "";

        return(
            <>
                {/* <div className={loadingDiv}></div> */}
                <ul className="photo-index">
                    {/* {photos} */}
                    {content}
                </ul>
            </>
        )
    }
}

export default PhotoIndex;