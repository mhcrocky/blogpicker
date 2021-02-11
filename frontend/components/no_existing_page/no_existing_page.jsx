import React from 'react';
import { Link } from 'react-router-dom';

const NoExistingPage = () => {
    return (
        <div>
            <h1>404 - Not Found!</h1>
            <Link to="/">
                Back to Home Page
            </Link>
        </div>
    )
};

export default NoExistingPage;