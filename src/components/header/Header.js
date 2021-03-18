import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    
    return (
        <header>
        <div className="header">
            <span style={{"--i": 1}}>D</span>
            <span style={{"--i": 2}}>O</span>
            <span style={{"--i": 3}}>N</span>
            <span style={{"--i": 4}}>Ț</span>
            <span style={{"--i": 5}}>U</span>
            <span style={{"--i": 6}}>&#8201;&#8201;</span>
            <span style={{"--i": 7}}>D</span>
            <span style={{"--i": 8}}>A</span>
            <span style={{"--i": 9}}>N</span>
            <span style={{"--i": 10}}>I</span>
            <span style={{"--i": 11}}>E</span>
            <span style={{"--i": 12}}>L</span>
            <span style={{"--i": 13}}>&#8201;&#8201;</span>
            <span style={{"--i": 14}}>N</span>
            <span style={{"--i": 15}}>I</span>
            <span style={{"--i": 16}}>C</span>
            <span style={{"--i": 17}}>O</span>
            <span style={{"--i": 18}}>L</span>
            <span style={{"--i": 19}}>A</span>
            <span style={{"--i": 20}}>E</span>
            
        </div>
        <div className="transition"></div>

        <nav className="menuButtons">
            <Link to="/">
                <label area-label="Projects">
                    <input type="radio" name="menu" />
                    <i class="fa fa-home" aria-hidden="true"></i>
                </label>
            </Link>
            <Link to="/about">
                <label area-label="About">
                    <input type="radio" name="menu" />
                    <i class="fa fa-id-card-o" aria-hidden="true"></i>
                </label>
            </Link>
        </nav>
        
        </header>
    );
}

export default Header;