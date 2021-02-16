import React from 'react';
import HeaderContainer from '../header/header_container';


class UpdatePhoto extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhoto();
    }

    render() {
        return (
            <div className="photo-update-page">
                <HeaderContainer />
            </div>
        )
    }
}

export default UpdatePhoto;