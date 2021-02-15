import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Feed from "./feed/feed";
import NoExistingPage from "./no_existing_page/no_existing_page";
import PhotoFormContainer from "./photo_form/photo_form_container";
import PhotoShowContainer from "./photo_show/photo_show_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import UserShowContainer from "./user_show/user_show_container";
import WelcomeContainer from "./welcome/welcome_container";

const App = () => {
    return (
        <div className="main-app-div">
            <Switch>
                <AuthRoute exact path='/' component={WelcomeContainer} />
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignUpFormContainer} />
                <ProtectedRoute exact path='/feed' component={Feed} />
                <ProtectedRoute exact path='/photo/new' component={PhotoFormContainer} />
                <ProtectedRoute exact path='/users/:id' component={UserShowContainer} />
                <ProtectedRoute exact path='/users/:id/albums' component={UserShowContainer} />
                <ProtectedRoute exact path='/photos/:id' component={PhotoShowContainer} />
                <Route component={NoExistingPage} />
            </Switch>
        </div>
    )
};

export default App;