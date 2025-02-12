import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Kashvi Creation</div>
            <div className="navbar-links">
                <Link to="/login" className="navbar-link">Login</Link>
                <Link to="/signup" className="navbar-link">Signup</Link>
            </div>
        </nav>
    );
}

export default Navbar;
