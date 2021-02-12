import React from 'react';
import HeaderContainer from '../header/header_container';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }

    handleChange(body) {
        return (e) => (
            this.setState({[body]: e.target.value})
        )
    }

    render () {
        <div className="photo-form-page">
            <HeaderContainer />
            <div className="photo-form-container">
                <label className="form-label">Upload a Photo!</label>
                <form>
                    <input type="file"/>
                    <label>Title:</label>
                    <input onChange={this.handleChange('title')}
                        type="text" value={this.state.title}/>
                    <label>Description:</label>
                    <textarea onChange={this.handleChange('description')}
                        value={this.state.description}></textarea>
                </form>
            </div>
        </div>
    }
}

export default PhotoForm;

