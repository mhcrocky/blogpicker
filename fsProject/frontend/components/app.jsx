import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Feed from "./feed/feed";
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import Welcome from "./welcome/welcome";

const App = () => (
    <div>
        <Route path='/' component={HeaderContainer} />
        <Route exact path='/' component={Welcome} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <Route path='/feed' component={Feed} />
    </div>
);

export default App;