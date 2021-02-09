import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    let loginCondition = <div></div>
    if (props.currentUser) {
        loginCondition = <>
            <Link to={`/users/${props.currentUser.id}`}>
                {props.currentUser.username}
            </Link>
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
            <h3>Website Name Header Here</h3>
            {loginCondition}
        </div>
    )
}

export default Header;