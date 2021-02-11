import React from 'react';
import PhotoIndexItem from './photo_index_item';


class PhotoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllPhotos();
    }

    render() {
        const photos = this.props.photos.map((photo) => {
            return (
                <PhotoIndexItem
                    key={photo.id}
                    photo={photo}
                    users={this.props.users}
                    fetchUser={this.props.fetchUser}/>
            )
        })

        return(
            <ul>
                {photos}
            </ul>
        )
    }
}

export default PhotoIndex;