import React, { Component } from 'react';
import API from '../../utils/API';
import './Form.css';

class Form extends Component {

    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        errorMessage: ""
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

        let emailObj = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };

        if(emailObj.name === "" || emailObj.email === "" || emailObj.subject === "" || emailObj.message === ""){
            this.setState({
                errorMessage: "Must Fill Out All Fields"
            })
        }
        else{
            API.sendForm(emailObj);

            this.setState({
                name: "",
                email: "",
                subject: "",
                message: "",
                errorMessage: "Message Sent. Thank You!"
            })
        }
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
                <div className="error">{this.state.errorMessage}</div>
            </form>
        );
    }
}

export default Form;