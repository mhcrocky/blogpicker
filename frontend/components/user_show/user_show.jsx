import React from 'react';
import HeaderContainer from '../header/header_container';

class UserShow extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return(
            <div className="user-show-page">
                <HeaderContainer />
                <div className="user-show-container">
                    
                </div>
            </div>
        )
    }
}

export default UserShow;