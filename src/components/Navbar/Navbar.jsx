import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './Navbar.scss';

export default function Navbar() {
  const location = useLocation();
  const [isCurrentUrlProfile, setUrl] = useState(
    () => location.pathname === '/profile',
  );

  useEffect(() => {
    setUrl(location.pathname === '/profile');
  }, [location]);

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
        <li className="item users-item">
          <NavLink to="/users" activeClassName="activeLink">
            Find users
          </NavLink>
        </li>
      </ul>
      {isCurrentUrlProfile && <Sidebar />}
    </nav>
  );
}
