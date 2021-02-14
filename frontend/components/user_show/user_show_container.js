import { connect } from "react-redux"
import { fetchUser } from "../../actions/user_actions"
import UserShow from "./user_show"


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        fetchUser: () => dispatch(fetchUser(ownProps.match.params.id))
    }
}

const UserShowContainer = connect(mapStateToProps,mapDispatchToProps)(UserShow);
export default UserShowContainer;