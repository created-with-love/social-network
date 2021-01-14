import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="item">
          <NavLink to="/profile" activeClassName="activeLink">
            Profile
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/dialogs" activeClassName="activeLink">
            Messages
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/news" activeClassName="activeLink">
            News
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/music" activeClassName="activeLink">
            Music
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/settings" activeClassName="activeLink">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
