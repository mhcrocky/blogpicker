import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { fetchDemo } from "../../actions/user_actions"
import SessionForm from "./session_form";


const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        formType: 'Login',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        fetchDemo: () => dispatch(fetchDemo())
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default LoginFormContainer;