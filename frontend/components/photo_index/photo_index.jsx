import React from 'react';


class PhotoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllPhotos();
    }

    render() {

        return(
            <ul>
                
            </ul>
        )
    }
}

export default PhotoIndex;