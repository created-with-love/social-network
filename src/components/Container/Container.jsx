import React from 'react';
import './Container.scss';

const Container = ({ children }) => {
  return <div className="content">{children}</div>;
};

export default Container;
