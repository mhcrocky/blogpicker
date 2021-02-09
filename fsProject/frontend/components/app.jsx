import React from "react";
import { Route } from "react-router-dom";
import Feed from "./feed/feed";
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import Welcome from "./welcome/welcome";

const App = () => (
    <div>
        <Route path='/' component={HeaderContainer}/>
        <Route exact path='/' component={Welcome}/>
        <Route path='/login' component={LoginFormContainer} />
        <Route path='/signup' component={SignUpFormContainer} />
        <Route path='/feed' component={Feed} />
    </div>
);

export default App;