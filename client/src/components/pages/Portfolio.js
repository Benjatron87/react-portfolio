import React, { Component } from 'react';
import Wrapper from "../Wrapper";
import projects from "../../projects.json";
import Card from "../Card";

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