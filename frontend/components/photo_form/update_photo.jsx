import React from 'react';
import HeaderContainer from '../header/header_container';


class UpdatePhoto extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            title: '',
            description: '',
            photoUrl: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhoto()
            .then(() => (
                this.setState({
                    title: this.props.photo.title,
                    description: this.props.photo.description,
                    photoUrl: this.props.photo.photoUrl})
            ));
    }

    handleChange(body) {
        return (e) => (
            this.setState({ [body]: e.target.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const updated = {title: this.state.title,
                        description: this.state.description,
                        id: this.props.match.params.id}
        this.props.updatePhoto(updated)
            .then(() => (
                this.props.history.push(`/photos/${this.props.match.params.id}`)
            ))
    }

    render() {
        const errors = this.props.errors.map((error, idx) => {
            return (
                <li className="errors" key={idx}>{error}</li>
            )
        });

        return (
            <div className="photo-update-page">
                <HeaderContainer />
                <div className="photo-form-container">
                    <label className="form-label">Update Photo Info</label>
                    <form onSubmit={this.handleSubmit}>
                        <div className="photo-form-input">
                            <div>
                                <input
                                    placeholder="Title"
                                    onChange={this.handleChange('title')}
                                    type="text"
                                    value={this.state.title} />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Description"
                                    onChange={this.handleChange('description')}
                                    value={this.state.description}>
                                </textarea>
                            </div>
                        </div>
                        <button className="upload-button">Update</button>
                    </form>
                    <h1>Photo:</h1>
                    <img src={this.state.photoUrl}
                        alt={this.state.title} className='preview-img'/>
                    <ul>
                        {errors}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UpdatePhoto;