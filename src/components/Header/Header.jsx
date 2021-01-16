import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Link to="/profile">
        <img
          src="https://hackernoon.com/hn-images/1*VeM-5lsAtrrJ4jXH96h5kg.png"
          alt="logo"
          width="85"
          height="40"
          className={s.logo}
        />
      </Link>
    </header>
  );
}
