import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Feed from "./feed/feed";
import NoExistingPage from "./no_existing_page/no_existing_page";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import Welcome from "./welcome/welcome";

const App = () => {
    return (
        <div className="main-app-div">
            <Switch>
                <AuthRoute exact path='/' component={Welcome} />
                <AuthRoute exact path='/login' component={LoginFormContainer} />
                <AuthRoute exact path='/signup' component={SignUpFormContainer} />
                <Route path='/feed' component={Feed} />
                <Route component={NoExistingPage} />
            </Switch>
        </div>
    )
};

export default App;