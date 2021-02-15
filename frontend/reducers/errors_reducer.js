import { combineReducers } from "redux";
import photoErrorsReducer from "./photos_error_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    photo: photoErrorsReducer
})

export default errorsReducer;