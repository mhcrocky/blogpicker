import React from 'react';
import { Link } from 'react-router-dom';

const NoExistingPage = () => {
    return (
        <div>
            <h1>Error 404 - Page not found!</h1>
            <Link to="/">
                Back to Home Page
            </Link>
        </div>
    )
};

export default NoExistingPage;