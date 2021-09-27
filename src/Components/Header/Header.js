import React from 'react';
import './Header.css';
// Header component
const Header = () => {
    return (
        <div className="header">
            <hr />
            <h2>Billion-Dollar Startups</h2>
            <h3 className="text-white fw-bold">Highest Startup Value : <span className="text-danger fw-bold">$140 billion</span></h3>
            <hr />
        </div>
    );
};

export default Header;