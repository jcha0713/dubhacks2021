import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="narbar-nav">
            <ul>
                <li><NavLink to="/start">Start</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/resources">Resources</NavLink></li>
            </ul>
        </nav>
        
    )
}
