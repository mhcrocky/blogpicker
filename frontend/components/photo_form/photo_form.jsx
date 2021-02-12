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
    }

    handleChange(body) {
        return (e) => (
            this.setState({[body]: e.target.value})
        )
    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]})
    }

    render () {
        console.log(this.state);
        return (
            <div className="photo-form-page">
                <HeaderContainer />
                <div className="photo-form-container">
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
                    </form>
                </div>
            </div>
        )
    }
}

export default PhotoForm;

