import React, { Component } from 'react';
import API from '../../utils/API';
import './Form.css';

class Form extends Component {

    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    handleChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }
    
    emailHandling = event => {
        event.preventDefault();

        let emailObj = this.state;

        API.sendForm(emailObj);

        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    }

    render() {
        return (
            <form className="contact-form">
                
                <div className="form-group row">

                        <input type="name" onChange={this.handleChange} name="name" value={this.state.name} className="contact-border form-control" id="inputName" placeholder="Name"/>
                </div>

                <div className="form-group row">
                    
                        <input type="email" onChange={this.handleChange} name="email" value={this.state.email} className="contact-border form-control" id="inputEmail" placeholder="Email"/>
                </div>

                <div className="form-group row">
                    
                        <input type="subject" onChange={this.handleChange} name="subject" value={this.state.subject} className="contact-border form-control" id="subject" placeholder="Subject"/>
                </div>

                <div className="form-group row">

                    <textarea  id="message" name="message" onChange={this.handleChange} value={this.state.message} className="contact-border form-control" type="textarea" placeholder="Message" maxLength="140" rows="7"></textarea>

                </div>

                <div className="form-group row">

                        <button onClick={this.emailHandling} value="Submit" type="submit" className="btn btn-primary send-btn">Send</button>

                </div>
            </form>
        );
    }
}

export default Form;