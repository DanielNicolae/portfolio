import React from 'react';
import Card from './Card';
import './Cards.css';

const Cards = () => {
    return (
        <div className="container">
            <Card 
                path="https://deadly-poet.herokuapp.com/"
                src="../videos/myworks.gif"
                name="My works"
                description="This is a project made in Django. I used webscrapping with python (beautiful soup) to gather data from the web." />
            <Card 
                path="https://free-steam-epic-games.herokuapp.com/"
                src="../videos/freegames.gif"
                name="Free video games"
                description="This is a project made in Django. I used webscrapping with python (beautiful soup) to gather images from the web." />
            <Card 
                path="https://polygonal-numbers-27298a.netlify.app/"
                src="../videos/polygonalnumbers.gif"
                name="Polygonal numbers"
                description="This is a project made in React. You can calculate the first 100 poligonal numbers with a certain number of vertices." />
            <Card 
                path="https://danielnicolae.github.io/Etch-a-Sketch/"
                src="../videos/etch-a-sketch.gif"
                name="Etch-a-sketch"
                description="It's a cancas made in plain JavaScript. You draw by dragging the mouse over the canvas; you can choose the size of the canvas and pick any color." />
            <Card 
                path="https://danielnicolae.github.io/Calculator/"
                src="../videos/calculator.gif"
                name="Calculator"
                description="This is a calculator made in vanila JavaScript; it has keyboard functionality." />    
        </div>
    );
}

export default Cards;