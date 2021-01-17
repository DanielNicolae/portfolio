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
                
        </div>
    );
}

export default Cards;