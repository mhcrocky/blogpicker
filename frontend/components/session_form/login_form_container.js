import { connect } from "react-redux"
import { login } from "../../actions/session_actions"
import SessionForm from "./session_form"


const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'Login'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default LoginFormContainer;