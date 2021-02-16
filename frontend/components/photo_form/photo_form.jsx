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
            <img src={this.state.photoUrl} /> : null;

        return (
            <div className="photo-form-page">
                <HeaderContainer />
                <div className="photo-form-container">
                    <label className="form-label">Upload a Photo!</label>
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <input placeholder="Title" onChange={this.handleChange('title')}
                                type="text" value={this.state.title}/>
                        </div>
                        <div>
                            <textarea
                                placeholder="Description"
                                onChange={this.handleChange('description')}
                                value={this.state.description}>
                            </textarea>
                        </div>
                        <input type="file" onChange={this.handleFile}/>
                        <button>Upload Photo</button>
                        <h1>Preview</h1>
                        {preview}
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

