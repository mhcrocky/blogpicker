import React from 'react';
import HeaderContainer from '../header/header_container';


const Welcome = (props) => {
 return (
     <div className="splash-background">
        <HeaderContainer />
        <div className="splash-body">
            <div className="splash-content">
                <h1>Find your inspiration.</h1>
                <p>This page will display login, sign up and demo</p>
                <button>Demo Login</button>
            </div>
        </div>
     </div>
 )
}

export default Welcome;