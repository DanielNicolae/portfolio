import React from 'react';
import Card from './Card';
import './Cards.css';

const Cards = () => {
    return (
        <div className="container">
            <Card
                path="https://ducks-vs-trucks.netlify.app/"
                src="./videos/ducks-vs-trucks.mp4"
                name="Ducks vs trucks"
                description="This is a project made in React. 
                It's a simple card game. You play with the computer. 
                Each card has a life and an attack power.
                As you click on one of your cards, the computer selects a random card; the attack power of each card is subtracted from the life of the opposite card.
                The sum of the lives of each card determines the winner at the end of the final round." />
            <Card
                path="https://danielnicolae.github.io/todo-list/"
                src="./videos/to-do-list.mp4"
                name="To-do list"
                description="This is part of the JavaScript course from theodinproject.com" />
            <Card
                path="https://danielnicolae.github.io/Etch-a-Sketch/"
                src="./videos/etch-a-sketch.mp4"
                name="Etch-a-sketch"
                description="It's a cancas made in plain JavaScript. You draw by dragging the mouse over the canvas; you can choose the size of the canvas and pick any color." />
            <Card
                path="https://deadly-poet.herokuapp.com/"
                src="../videos/myworks.mp4"
                name="My works"
                description="This is a project made in Django. I used webscrapping with python (beautiful soup) to gather data from the web." />
            <Card
                path="https://free-steam-epic-games.herokuapp.com/"
                src="../videos/freegames.mp4"
                name="Free video games"
                description="This is a project made in Django. I used webscrapping with python (beautiful soup) to gather images from the web." />
            <Card
                path="https://polygonal-numbers-27298a.netlify.app/"
                src="../videos/polygonal-numbers.mp4"
                name="Polygonal numbers"
                description="This is a project made in React. You can calculate the first 100 poligonal numbers with a certain number of vertices." />
        </div>
    );
}

export default Cards;