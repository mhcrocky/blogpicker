import React from 'react';
import HeaderContainer from '../header/header_container';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null,
            photoUrl: null,
            loading: false
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(body) {
        return (e) => (
            this.setState({[body]: e.target.value})
        )
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        }
        if (file) {
            fileReader.readAsDataURL(file); //Allows us to save a URL and render preview
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const photoForm = new FormData();
        photoForm.append('photo[title]', this.state.title);
        photoForm.append('photo[description]', this.state.description);
        if (this.state.photoFile) {
            photoForm.append('photo[picture]', this.state.photoFile);
        }
        this.setState({loading: true}, () => {
            this.props.createPhoto(photoForm)
                .then(() => {
                    this.setState({loading: false});
                    this.props.history.push('/feed');
                })
        })
    }

    render () {
        const errors = this.props.errors.map((error, idx) => {
            return (
                <li className="errors" key={idx}>{error}</li>
            )
        });

        const preview = this.state.photoUrl ?
            <img className="preview-img" src={this.state.photoUrl} /> : null;

        const loadingDiv = this.state.loading ? "loader" : "";

        return (
            <div className="photo-form-page">
                <HeaderContainer />
                <div className="photo-form-container">
                    <i onClick={() => this.props.history.goBack()}
                    className="fas fa-arrow-left"></i>
                    <label className="form-label">Upload a Photo!</label>
                    <form onSubmit={this.handleSubmit} >
                        <div className="photo-form-input">
                            <div>
                                <input placeholder="Title"
                                onChange={this.handleChange('title')}
                                type="text"
                                value={this.state.title}/>
                            </div>
                            <div>
                                <textarea
                                    placeholder="Description"
                                    onChange={this.handleChange('description')}
                                    value={this.state.description}>
                                </textarea>
                            </div>
                        </div>
                        <input
                        name="file-input"
                        id="file-input"
                        type="file"
                        accept="image/*"
                        onChange={this.handleFile}/>
                        <label className="choose-file" htmlFor="file-input">
                            Choose File
                        </label>
                        <button className="upload-button">Upload Photo</button>
                    </form>
                    <div className={loadingDiv}></div>
                    <ul className="form-errors">
                        {errors}
                    </ul>
                    <h1>Preview</h1>
                    {preview}
                </div>
            </div>
        )
    }
}

export default PhotoForm;

