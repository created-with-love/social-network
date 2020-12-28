import React from 'react';
import './Navbar.scss';

export default function Header() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="item">
          <a href="/">Profile</a>
        </li>
        <li className="item active">
          <a href="/">Messages</a>
        </li>
        <li className="item">
          <a href="/">News</a>
        </li>
        <li className="item">
          <a href="/">Music</a>
        </li>
        <li className="item">
          <a href="/">Settings</a>
        </li>
      </ul>
    </nav>
  );
}
