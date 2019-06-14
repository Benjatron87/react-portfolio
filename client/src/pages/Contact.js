import React, { Component } from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import Form from '../components/Form/Form';

class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

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