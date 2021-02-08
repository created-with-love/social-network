import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header({ isUserAuth, isAuthFetching, loginName }) {
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

      <div className={s.loginBlock}>
        {isAuthFetching ? (
          <h4>Loading...</h4>
        ) : isUserAuth ? (
          <p className={s.userName}>Welcome, {loginName}</p>
        ) : (
          <NavLink to="/login" className={s.loginLink}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}
