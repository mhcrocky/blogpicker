import { connect } from "react-redux"
import { login } from "../../actions/session_actions"
import Welcome from "./welcome"

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

const WelcomeContainer = connect(null, mapDispatchToProps)(Welcome);

export default WelcomeContainer;