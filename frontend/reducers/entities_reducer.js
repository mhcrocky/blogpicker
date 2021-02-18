import { combineReducers } from "redux";
import albumsReducer from "./albums_reducer";
import photosAlbumsReducer from "./photos_albums_reducer";
import photosReducer from "./photos_reducer";
import usersReducer from "./users_reducer";



const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer,
    albums: albumsReducer,
    photosAlbums: photosAlbumsReducer
})

export default entitiesReducer;