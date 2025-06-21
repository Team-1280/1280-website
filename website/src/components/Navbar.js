import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {/** Navbar on all pages */
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo"></Link>
                <div className = "links">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Outreach">Outreach</Link>
                    <Link to="/Resources">Resources</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;