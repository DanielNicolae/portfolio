import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="container">
                <div className="headerName">
                    <span style={{ "--i": 1 }}>DANIEL NICOLAE DONȚU</span>
                    <span style={{ "--i": 2 }}>DANIEL NICOLAE DONȚU</span>
                    <span style={{ "--i": 3 }}>DANIEL NICOLAE DONȚU</span>
                    <span style={{ "--i": 4 }}>DANIEL NICOLAE DONȚU</span>
                    <span style={{ "--i": 5 }}>DANIEL NICOLAE DONȚU</span>
                    <span style={{ "--i": 6 }}>DANIEL NICOLAE DONȚU</span>
                </div>
            </div>
            <div className="transition"></div>

            <nav className="menuButtons">
                <Link to="/">
                    <label area-label="Projects"> Projects
                    <input type="radio" name="menu" />
                        <i class="fa fa-home" aria-hidden="true"></i>
                    </label>
                </Link>
                <Link to="/about">
                    <label area-label="About"> About
                    <input type="radio" name="menu" />
                        <i class="fa fa-id-card-o" aria-hidden="true"></i>
                    </label>
                </Link>
            </nav>

        </header>
    );
}

export default Header;