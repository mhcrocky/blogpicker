import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as Action from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<h1>Flickr Clone</h1>, root);

    //Remove these after done testing!
    window.store = store;
    window.login = Action.login;
    window.logout = Action.logout;
    window.signup = Action.signup;
})