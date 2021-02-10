import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import { getAuthObject } from 'redux/selectors';

const HeaderContainer = () => {
  const { isAuth, isFetching, login } = useSelector(getAuthObject);

  return (
    <Header isUserAuth={isAuth} isAuthFetching={isFetching} loginName={login} />
  );
};

export default HeaderContainer;
