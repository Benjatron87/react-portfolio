import React, { Component } from 'react';
import Wrapper from '../../components/Wrapper/index';
import './FlappyDisc.css'

class FlappyDisc extends Component {
    
    render() {
        return (
            <Wrapper title="Flappy Disc">

                <div id="container" className="container">

                    <canvas id="myCanvas" width="480" height="600"></canvas>

                    <div id="play-again">New Game</div>
                    <div id="howto">(Press 'W' to Start)</div>
                    <a id="code-link" href="https://github.com/Benjatron87/2D-js-game" target="blank">Github Code</a>
                    <div id="score">Score: 0</div>
                    <div id="highscore">High Score: 0</div>

                </div>

            </Wrapper>
        );
    }
}

export default FlappyDisc;