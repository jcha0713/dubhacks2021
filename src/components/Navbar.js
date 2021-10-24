import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 right-4 bg-gray-900 text-white rounded-lg p-2">
      <ul>
        <li>
          <NavLink to="/start">
            <button>Home</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <button>About</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources">
            <button>Resources</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
