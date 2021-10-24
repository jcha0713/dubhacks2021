import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-4">
      <p className="text-accent font-bold tracking-wide text-2xl pointer-events-none">
        Project Assure
      </p>
      <div>
        <NavLink
          className="p-4 text-lg font-medium text-white hover:bg-primary-lighter rounded-xl transition-colors duration-300 ease-in-out"
          to="/start"
          activeClassName="activeLink"
        >
          Start
        </NavLink>
        <NavLink
          className="p-4 text-lg font-medium text-white hover:bg-primary-lighter rounded-xl transition-colors duration-300 ease-in-out"
          to="/about"
          activeClassName="activeLink"
        >
          About
        </NavLink>
        <NavLink
          className="p-4 text-lg font-medium text-white hover:bg-primary-lighter rounded-xl transition-colors duration-300 ease-in-out"
          to="/resources"
          activeClassName="activeLink"
        >
          Resources
        </NavLink>
      </div>
    </nav>
  );
}
