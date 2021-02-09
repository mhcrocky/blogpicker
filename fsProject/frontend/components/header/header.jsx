import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let loginCondition = <div></div>
        if (this.props.currentUser) {
            loginCondition = <>
                <Link to={`/users/${this.props.currentUser.id}`}>
                    {this.props.currentUser.username}
                </Link>
                <button onClick={this.props.logout}>Logout</button>
            </>
        } else {
            loginCondition = <>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </>
        }
    
        return (
            <div>
                <h3>Website Name Header Here</h3>
                {loginCondition}
            </div>
        )
    }

}

export default Header;