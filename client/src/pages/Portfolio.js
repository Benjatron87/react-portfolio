import React, { Component } from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import projects from "../projects.json";
import Card from "../components/Card/Card";

class Portfolio extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    state = {
        projects
    }

    render() {
        return (
            <div>
                <Wrapper title="Projects">
                    {this.state.projects.map((project,index) => (
                        <Card
                        details={project.details}
                        name={project.name}
                        image={project.image}
                        link={project.link}
                        key={index}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default Portfolio;