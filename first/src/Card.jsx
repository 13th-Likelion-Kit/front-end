import React from 'react';
import './App.css'

const Card = (props) => {
    return (
        <div>
            <img src={props.img} alt="puppy"></img>
            <h1> {props.name} </h1>
            <h2> {props.num} </h2>
            <h3> {props.age} </h3>

        </div>
    );
}

export default Card;