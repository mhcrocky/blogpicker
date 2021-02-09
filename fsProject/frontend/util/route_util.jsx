import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={props =>
                !loggedIn ? <Component {...props} /> : <Redirect to="/feed" />
            }
        />
    )
};

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUserId) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);