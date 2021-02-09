import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        return this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    render() {
        let loginCondition;
        if (this.props.currentUser) {
            loginCondition = <>
                <Link to={`/users/${this.props.currentUser.id}`}>
                    {this.props.currentUser.username}
                </Link>
                <button onClick={this.handleLogout}>Logout</button>
            </>
        } else if (this.props.location.pathname === "/login" ||
        this.props.location.pathname === "/signup") {
            loginCondition = <div></div>;
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