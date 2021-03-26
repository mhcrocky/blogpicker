import React, {useEffect} from 'react';
import HeaderContainer from '../header/header_container';
import PhotoIndexContainer from '../photo_index/photo_index_container';

const TagIndex = (props) => {

    // componentDidMount() {
    //     this.props.fetchATag();
    //     this.props.receiveTaggedPhotos();
    // }
    useEffect(() => {
        props.fetchATag();
        props.receiveTaggedPhotos();
    }, [])

    if (!props.tag) return null;
    return (
        <div className="feed-page">
            <HeaderContainer />
            <div className="feed-body">
                <h1>Tag #{props.tag.name}</h1>
                <PhotoIndexContainer photoIds={props.photoIds} />
            </div>
        </div>
    )

}

export default TagIndex;