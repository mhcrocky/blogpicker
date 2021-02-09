import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    let loginCondition = <div></div>
    if (props.currentUser) {
        loginCondition = <>
            <h2>Welcome! {props.currentUser.username}</h2>
            <button onClick={props.logout}>Logout</button>
        </>
    } else {
        loginCondition = <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </>
    }

    return (
        <div>
            <h1>Website Name Header Here</h1>
            {loginCondition}
        </div>
    )
}

export default Header;