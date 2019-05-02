import React from 'react';
import "./style.css";

function Card (props) {
        return (
            <div className="card">
                <img className="card-img" src={props.image} alt="missing"></img>
                <div className="card-img-overlay">
                    <a href={props.link} className="card-text">{props.name}</a>
                </div>
            </div>
        );
}

export default Card;