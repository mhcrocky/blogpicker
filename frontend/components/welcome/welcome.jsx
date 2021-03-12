import React from 'react';
import HeaderContainer from '../header/header_container';


const Welcome = (props) => {
   
    const demoLogin = () => {
        props.login({username: 'Demo_User', password: '123456'})
    }

    return (
        <div className="splash-background">
            <HeaderContainer />
            <div className="splash-body">
                <div className="splash-content">
                    <h1>Find your inspiration.</h1>
                    <p>Join the Picktr community! Feel free to click around!</p>
                    <button onClick={demoLogin}>Demo Login</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome;