import { signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        errors: state.errors,
        formType: 'Sign up for Picktr'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

const SignUpFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignUpFormContainer;