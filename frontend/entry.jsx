import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import * as APIUtil from './util/album_api_util';

document.addEventListener("DOMContentLoaded", () => {
    let store;                   //Allowing user to refresh & stay logged in
    if (window.currentUser) {    //We set currentUser in root.html.erb
        const preloadedState = { //If a currentUser exists, adding to preload
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);

    //Remove these after done testing!
    window.createAlbum = APIUtil.createAlbum;
    window.fetchAllAlbums = APIUtil.fetchAllAlbums;
    window.fetchAlbum = APIUtil.fetchAlbum;
    window.deleteAlbum = APIUtil.deleteAlbum;
})