import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import * as Action from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);

    //Remove these after done testing!
    window.store = store;
    window.login = Action.login;
    window.logout = Action.logout;
    window.signup = Action.signup;
})