import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { logoutThunk } from 'redux/reducers/authReducer';
import s from './Header.module.css';

export default function Header({ isUserAuth, isAuthFetching, loginName }) {
  const dispatch = useDispatch();

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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {loginName && (
              <p className={s.userName} style={{ marginRight: 10 }}>
                Welcome, {loginName}
              </p>
            )}
            <button type="button" onClick={() => dispatch(logoutThunk())}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <NavLink
              to="/login"
              className={s.loginLink}
              activeClassName={s.activeLink}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={s.loginLink}
              activeClassName={s.activeLink}
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
