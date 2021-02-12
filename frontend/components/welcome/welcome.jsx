import React from 'react';
import HeaderContainer from '../header/header_container';


class Welcome extends React.Component  {
    constructor(props) {
        super(props);
        this.state
        this.demoLogin = this.demoLogin.bind(this);
    }
    demoLogin () {
        this.props.login({username: 'Demo_User', password: '123456'})
    }

    render () {

        return (
            <div className="splash-background">
                <HeaderContainer />
                <div className="splash-body">
                    <div className="splash-content">
                        <h1>Find your inspiration.</h1>
                        <p>Join the Picktr community! Feel free to click around!</p>
                        <button onClick={this.demoLogin}>Demo Login</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Welcome;