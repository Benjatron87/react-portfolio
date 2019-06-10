import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function Card (props) {
        return (

            <Link to={props.details} className="card">
                <img className="card-img" src={props.image} alt="missing"></img>
                <div className="card-img-overlay">
                    <p className="card-text">{props.name}</p>
                </div>
            </Link>
        );
}

export default Card;