import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        return this.props.logout()
    }

    render() {
        const pathname = this.props.location.pathname;
        let loginCondition = <div></div>;
        let usernameCondition = <div></div>;
        if (this.props.currentUser) {
            loginCondition =
                <div className="icon-logout-container">
                    <a href="https://github.com/bcdguz/picktr">
                        <i className="fab fa-github"></i>
                    </a>
                    <Link to="/photo/new">
                        <i className="fas fa-cloud-upload-alt"></i>
                    </Link>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>;
            usernameCondition =
                <Link to={`/users/${this.props.currentUser.id}`}>
                    Your Profile
                </Link>;
        } else if (pathname !== "/login" && pathname !== "/signup") {
            loginCondition = 
                <div className="splash-head-buttons">
                    <a href="https://github.com/bcdguz/picktr">
                        <i className="fab fa-github"></i>=
                    </a>
                    <div className="login-signup">
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
        }
        
        let nameOfClass; //To change header visual for login/signup page
        if (pathname === "/") {
            nameOfClass = 'header-landing';
        } else {
            nameOfClass = 'header';

        }

        return (
            <div className={nameOfClass}>
                <div className="header-content">
                    <div className="header-logo">
                        <svg viewBox="0 0 24 24" className="circles-container">
                            <circle id="circle-left" cx="6" cy="12" r="5"></circle>
                            <circle id="circle-right" cx="18" cy="12" r="5"></circle>
                        </svg>
                        <Link to="/">
                            <h1>Picktr</h1>
                        </Link>
                        <div className="username-nav">
                            {usernameCondition}
                        </div>
                    </div>
                    {loginCondition}
                </div>
            </div>
        )
    }

}

export default Header;