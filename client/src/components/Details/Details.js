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

                        {this.state.project.deployed ? 
                        
                            <a className="deployed-link" href={this.state.project.deployed} target="blank">

                                <img src="/images/open-icon.png" height="32px" width="32px" alt="open"></img>
                            </a>
                        
                        : ""}

                        <a className="git-link" href={this.state.project.link} target="blank">

                            <img src="/images/GitHub-Mark-32px.png" alt="github"></img>
                        </a>

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