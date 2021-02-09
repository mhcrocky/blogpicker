import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { logout } from "../../actions/session_actions"
import Header from "./header"


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));