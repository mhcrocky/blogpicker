import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import { deleteAlbum } from './actions/album_actions';
import { fetchPhotosAlbums } from './actions/photos_album_actions';
import { createPhotosAlbum } from './util/photos_albums_util';
import { createAlbum } from './util/album_api_util';

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
    window.store = store;
    window.fetchPhotosAlbums = fetchPhotosAlbums;
    window.createPhotosAlbum = createPhotosAlbum;
    window.dispatch = store.dispatch;
    window.deleteAlbum = deleteAlbum;
    window.createAlbum = createAlbum;
})