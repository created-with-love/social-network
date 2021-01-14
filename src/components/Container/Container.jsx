import React from 'react';
import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={s.content}>{children}</div>;
};

export default Container;
