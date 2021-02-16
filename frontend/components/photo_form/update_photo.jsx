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

    render() {

        return (
            <div className="photo-update-page">
                <HeaderContainer />
                <div className="photo-form-container">
                    <label className="form-label">Update Photo Info</label>
                    <form>
                        <div className="photo-form-input">
                            <div>
                                <input
                                    onChange={this.handleChange('title')}
                                    type="text"
                                    value={this.state.title} />
                            </div>
                            <div>
                                <textarea
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
                </div>
            </div>
        )
    }
}

export default UpdatePhoto;