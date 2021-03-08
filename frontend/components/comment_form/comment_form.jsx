class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: ""};
        this.inputHandler = this.inputHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputHandler(e) {
        this.setState({body: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {body: this.state.body, photo_id: this.props.photoId};
        this.props.createComment(data);
    }

    render() {
        return(
            <div className="comment-form-container">
                <form onSubmit={this.handleSubmit} className="comment-form">
                    <input onChange={this.inputHandler} type="text"
                    value={this.state.body} placeholder="Add a comment"/>
                    <button className="upload-button">Comment</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;