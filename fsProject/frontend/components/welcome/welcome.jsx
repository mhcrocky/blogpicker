import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
 return (
     <div>
        <h1>Welcome Page to display login and signup!</h1>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
     </div>
 )
}

export default Welcome;