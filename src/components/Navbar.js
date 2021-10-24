import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="narbar-nav">
      <ul>
        <li>
          <NavLink to="/start" activeClassName="activeLink">
            Start
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="activeLink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" activeClassName="activeLink">
            Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
