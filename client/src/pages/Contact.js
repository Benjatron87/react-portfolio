import React, { Component } from 'react';
import Wrapper from "../components/Wrapper/index";
import Form from '../components/Form/Form';

class Contact extends Component {
  render() {
    return (
      <div>
        <Wrapper title="Contact Me">
          <Form/>
        </Wrapper>
      </div>
    );
  }
}

export default Contact;