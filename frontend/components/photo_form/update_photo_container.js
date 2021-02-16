import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        photo : state.entities.photos[ownProps.match.params.id]
    }
}