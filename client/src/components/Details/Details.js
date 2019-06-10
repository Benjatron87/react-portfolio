import React, { Component } from 'react';
import Wrapper from '../Wrapper/index';
import './Details.css';

class Details extends Component {

    state = {
        project: this.props.project
    }

    render() {
        return (
            <Wrapper title={this.state.project.name}>
                <div className="row">
                    <div>
                        <img src={this.state.project.image}  alt="oops" className="details-image"></img>
                        <a className="git-link" href={this.state.project.link} target="blank">GitHub Link</a>
                        <br></br>
                        <p className="details-summary">
                            {this.state.project.summary}
                        </p>
                        
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Details;