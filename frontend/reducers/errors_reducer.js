import { combineReducers } from "redux";
import albumErrorsReducer from "./albums_error_reducer";
import photoErrorsReducer from "./photos_error_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    photo: photoErrorsReducer,
    album: albumErrorsReducer
})

export default errorsReducer;