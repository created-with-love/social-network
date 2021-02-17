import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuthObject } from 'redux/selectors';
import Sidebar from '../Sidebar';
import './Navbar.scss';

export default function Navbar() {
  const location = useLocation();
  const [isCurrentUrlProfile, setUrl] = useState(
    () => location.pathname === '/profile',
  );

  const { isAuth } = useSelector(getAuthObject);

  useEffect(() => {
    setUrl(location.pathname === '/profile');
  }, [location]);

  return (
    <nav className="nav">
      {isAuth && (
        <>
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
                News (Soon)
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/music" activeClassName="activeLink">
                Music (Soon)
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/settings" activeClassName="activeLink">
                Settings (Soon)
              </NavLink>
            </li>
            <li className="item users-item">
              <NavLink to="/users" activeClassName="activeLink">
                Find users
              </NavLink>
            </li>
          </ul>
          {isCurrentUrlProfile && <Sidebar />}
        </>
      )}
    </nav>
  );
}
