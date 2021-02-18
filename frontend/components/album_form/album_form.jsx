import HeaderContainer from "../header/header_container";
import React from 'react';

class AlbumForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllPhotos();
    }

    handleChange(body) {
        return (e) => (
            this.setState({ [body]: e.target.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const album = {title: this.state.title,
                    description: this.state.description};
        this.props.createAlbum(album)
            .then(() => {
                this.props.history.goBack();
            })
    }


    render() {
        const errors = this.props.errors.map((error, idx) => {
            return (
                <li className="errors" key={idx}>{error}</li>
            )
        });

        return (
            <div className="form-page">
                <HeaderContainer />
                <div className="form-container">
                    <i onClick={() => this.props.history.goBack()}
                        className="fas fa-arrow-left"></i>
                    <label className="form-label">Create an Album</label>
                    <form onSubmit={this.handleSubmit}>
                        <div className="upload-form-input">
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
                        <button className="upload-button">Create</button>
                    </form>
                    <ul className="form-errors">
                        {errors}
                    </ul>
                    <div className="image-selector">

                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumForm;