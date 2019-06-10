import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <Wrapper title="About">
          <div className="row">

              <p className="summary">
                <img src="/images/Facepic.png" alt="oops" className="home-image"></img>
                Hello, my name is Benjamin Thomsen (Benj for short). I was born in Raleigh, North Carolina and have lived in the area my whole life. I graduated from Appalachian State University with a degree in Sustainable Technology and a Minor in Physics in May of 2018. I have also graduated from the UNC Chapel Hill coding bootcamp where I learned how to make this webpage and much more. In my personal life, I enjoy backpacking, playing basketball, and playing ultimate frisbee.
                I played five years of college ultimate, and have played four years of summer elite club with a local club team called Turbine.I have also been on the practice squad for two professional ultimate teams: The Charlotte Express, and The Raleigh Flyers. 
              </p>
              <p className="summary">
                I am currently looking for work doing software development. I have become very familiar with Javascript/Jquery, HTML and CSS as well as databases such as  MySql and MongoDB. I know Node.js as well as React and understand the fundamentals of both front-end and back-end technologies and how to deploy them properly. I have also delved into Arduino and combining my love of hardware with software to create a handful of fun projects.
              </p>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default Home;
