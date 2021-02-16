import React from 'react';
import PhotoIndexItem from './photo_index_item';


class PhotoIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    componentDidMount() {
        Promise.all([this.props.fetchAllUsers(), this.props.fetchAllPhotos()])
            .then(() => (
                this.setState({ loading: false })
            ));
    }

    render() {


        const photos = this.props.photos.map((photo) => { //this.props.users[photo.userId]
            return (
                <PhotoIndexItem
                    key={photo.id}
                    photo={photo}
                    users={this.props.users}
                    fetchUser={this.props.fetchUser}/>
            )
        })
        
        const loadingDiv = this.state.loading ? "loader" : "";

        return(
            <>
                <div className={loadingDiv}></div>
                <ul className="photo-index">
                    {photos}
                </ul>
            </>
        )
    }
}

export default PhotoIndex;