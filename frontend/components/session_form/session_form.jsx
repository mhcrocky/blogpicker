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
        let signUpOrLogin = <div></div>;
        if (this.props.formType === 'Login') {
            signUpOrLogin = <div>Not a (app_name) member? 
                <Link to="/signup"> Sign up here.</Link>
            </div>
        } else {
            signUpOrLogin = <div>Already a (app_name) member?
                <Link to="/login"> Login here.</Link>
            </div> 
        }
        
        const errors = this.props.errors.session.map((error, idx) => {
            return (
                <li key={idx}>{error}</li>
            )
        })
        return (
            <div className="session-form-body">
                <HeaderContainer />
                <div className="session-form-container">
                    <svg viewBox="0 0 24 24" className="circles-container">
                        <circle id="circle-left" cx="6" cy="12" r="5"></circle>
                        <circle id="circle-right" cx="18" cy="12" r="5"></circle>
                    </svg>
                    <h3>{this.props.formType}</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:
                            <input onChange={this.handleChange('username')} type="text" value={this.state.username} />
                        </label>
                        <label>Password:
                            <input onChange={this.handleChange('password')} type="password" value={this.state.password} />
                        </label>
                        <button>Submit</button>
                    </form>
                    <ul>
                        {errors}
                    </ul>
                    {signUpOrLogin}
                </div>
            </div>
        )
    }
}

export default SessionForm;