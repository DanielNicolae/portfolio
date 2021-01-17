import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        
        <a className="box" href={props.path}>
            <div className="videoBox">
                <img src={props.src} width='100%' alt="project" />
            </div>
            <div className="textBox">
                <div className="text">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div> 
            </div>           
        </a>
        
    );
}

export default Card;