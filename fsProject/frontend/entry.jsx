import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Flickr Clone</h1>, root);
})