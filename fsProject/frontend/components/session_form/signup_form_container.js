import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors,
        formType: 'Sign Up'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

const SignUpFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignUpFormContainer;