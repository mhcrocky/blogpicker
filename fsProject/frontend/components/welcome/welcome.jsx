import React from 'react';
import HeaderContainer from '../header/header_container';


const Welcome = (props) => {
 return (
     <div>
        <HeaderContainer />
        <h1>Welcome Page!</h1>
        <p>This page will display login, sign up and demo</p>
     </div>
 )
}

export default Welcome;