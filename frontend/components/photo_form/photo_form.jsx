import React from 'react';
import HeaderContainer from '../header/header_container';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            photoFile: null
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
        this.setState({photoFile: e.currentTarget.files[0]})
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[title]')
    }

    render () {
        return (
            <div className="photo-form-page">
                <HeaderContainer />
                <div onSubmit={this.handleSubmit} className="photo-form-container">
                    <label className="form-label">Upload a Photo!</label>
                    <form>
                        <input type="file" onChange={this.handleFile}/>
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
                </div>
            </div>
        )
    }
}

export default PhotoForm;

