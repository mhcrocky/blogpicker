import { connect } from "react-redux"
import { fetchAllFavorites } from "../../actions/favorite_actions"
import { fetchUser } from "../../actions/user_actions"
import UserShow from "./user_show"


const mapStateToProps = (state, ownProps) => {
    let favorites = state.entities.favorites;
    let photoIds = [];
    if (favorites !== undefined) {
        Object.values(favorites).forEach(favorite => {
            if (favorite.userId === parseInt(ownProps.match.params.id)) {
                photoIds.push(favorite.photoId);
            }
        })
    }

    return {
        user: state.entities.users[ownProps.match.params.id],
        photoIds
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        fetchUser: () => dispatch(fetchUser(ownProps.match.params.id)),
        fetchAllFavorites: () => dispatch(fetchAllFavorites())
    }
}

const UserShowContainer = connect(mapStateToProps,mapDispatchToProps)(UserShow);
export default UserShowContainer;