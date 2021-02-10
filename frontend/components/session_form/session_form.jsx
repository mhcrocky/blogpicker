import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(body) {
        return (e) => (
            this.setState({ [body]: e.target.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
    }

    render() {
        let signUpOrLogin;
        let demoLogin;

        if (this.props.formType === 'Login to Picktr') {
            signUpOrLogin = <div className="sign-up-or-log-in">
                Not a Picktr member? 
                <Link to="/signup"> Sign up here.</Link>
            </div>;

            demoLogin = <button type="button" className="session-button"
                onClick={() => this.props.processForm(
                {username:'demo_user', password:'123456'})}>
                Demo Login</button>;

        } else {
            signUpOrLogin = <div className="sign-up-or-log-in">
                Already a Picktr member?
                <Link to="/login"> Login here.</Link>
            </div>;

            demoLogin = <div></div>;
        }
        
        const errors = this.props.errors.session.map((error, idx) => {
            return (
                <li key={idx}>{error}</li>
            )
        })

        const buttonText = (this.props.formType === 'Login to Picktr') ? 'Next'
            : 'Sign up';

        return (
            <div className="session-form-body">
                <HeaderContainer />
                <div className="session-form-container">
                    <div className="session-form-content">
                        <svg viewBox="0 0 24 24" className="circles-container">
                            <circle id="circle-left" cx="6" cy="12" r="5"></circle>
                            <circle id="circle-right" cx="18" cy="12" r="5"></circle>
                        </svg>
                        <h3>{this.props.formType}</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-input">
                                <label>Username</label>
                                <input onChange={this.handleChange('username')}
                                type="text" value={this.state.username} />
                            </div>
                            <div className="form-input">
                                <label>Password</label>
                                <input onChange={this.handleChange('password')}
                                type="password" value={this.state.password} />
                            </div>
                            <ul className="form-errors">
                                {errors}
                            </ul>
                            <button className="session-button">{buttonText}</button>
                            {demoLogin}
                        </form>
                        {signUpOrLogin}
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;