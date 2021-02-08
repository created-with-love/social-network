import React from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserThunk } from 'redux/reducers/authReducer';
import { getAuthObject } from 'redux/selectors';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { isAuth, isFetching, login } = useSelector(getAuthObject);

  React.useEffect(() => {
    dispatch(getCurrentUserThunk);
  }, [dispatch]);

  return (
    <Header isUserAuth={isAuth} isAuthFetching={isFetching} loginName={login} />
  );
};

export default HeaderContainer;
