import React from 'react';
import "./style.css";

function Card (props) {
        return (

            <a href={props.link} className="card">
                <img className="card-img" src={props.image} alt="missing"></img>
                <div className="card-img-overlay">
                    <p className="card-text">{props.name}</p>
                </div>
            </a>
        );
}

export default Card;