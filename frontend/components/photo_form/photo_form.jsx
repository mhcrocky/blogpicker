import React from 'react';
import HeaderContainer from '../header/header_container';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null,
            photoUrl: null
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(body) {
        return (e) => (
            this.setState({[body]: e.target.value});
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
        photoForm.append('photo[picture]', this.state.photoFile);
        this.props.createPhoto(photoForm)
            .then(() => (
                this.props.history.push('/feed')
            ))
    }

    render () {
        const errors = this.props.errors.map((error, idx) => {
            return (
                <li key={idx}>{error}</li>
            )
        });

        const preview = this.state.photoUrl ?
            <img src={this.state.photoURL} /> : null;

        return (
            <div className="photo-form-page">
                <HeaderContainer />
                <div className="photo-form-container">
                    <label className="form-label">Upload a Photo!</label>
                    <form onSubmit={this.handleSubmit} >
                        <input type="file" onChange={this.handleFile}/>
                        <h3>Preview</h3>
                        {preview}
                        <div>
                            <label>Title:</label>
                            <input onChange={this.handleChange('title')}
                                type="text" value={this.state.title}/>
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea
                                onChange={this.handleChange('description')}
                                value={this.state.description}>
                            </textarea>
                        </div>
                        <button>Upload Photo</button>
                    </form>
                    <ul>
                        {errors}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PhotoForm;

