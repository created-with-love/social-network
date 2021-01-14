import React from 'react';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://logodix.com/logo/573.png"
        alt="logo"
        width="85"
        height="60"
        className={s.logo}
      />
    </header>
  );
}
