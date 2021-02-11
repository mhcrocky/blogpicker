import { combineReducers } from "redux";
import photosReducer from "./photos_reducer";
import usersReducer from "./users_reducer";



const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer
})

export default entitiesReducer;