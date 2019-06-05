import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import projects from "../projects.json";
import Card from "../components/Card/index";

class Portfolio extends Component {

    state = {
        projects
    }

    render() {
        return (
            <div>
                <Wrapper title="Projects">
                    {this.state.projects.map(project => (
                        <Card
                        name={project.name}
                        image={project.image}
                        link={project.link}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default Portfolio;