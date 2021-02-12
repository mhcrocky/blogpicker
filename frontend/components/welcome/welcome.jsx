import React from 'react';
import HeaderContainer from '../header/header_container';


class Welcome extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {background: 'splash1.jpg'}
        this.demoLogin = this.demoLogin.bind(this);
    }

    // componentDidMount() {
    //     let i = 1;
    //     const background = document.getElementsByClassName('splash-background')[0];
    //     setInterval(() => {
    //         (i === 5) ? (i = 1) : i++;
    //         background.style.backgroundImage = `asset-url(${this.state.background})`;
    //         this.setState({background: `splash${i}.jpg`})
    //     }, 6000)
    // }


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
                <button onClick={this.setBackground}>click</button>
            </div>
        )
    }

}

export default Welcome;