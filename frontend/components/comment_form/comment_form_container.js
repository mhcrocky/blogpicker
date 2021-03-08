import { connect } from "react-redux"
import { createComment } from "../../actions/comment_actions"
import CommentForm from "./comment_form"

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    }
}

const CommentFormContainer = connect(null, mapDispatchToProps)(CommentForm);
export default CommentFormContainer;