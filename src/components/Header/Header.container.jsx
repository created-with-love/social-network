import React from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthFetching, setUserData } from 'redux/reducers/authReducer';
import { getAuthObject } from 'redux/selectors';
import { getData } from 'services/apiService';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { isAuth, isFetching, login } = useSelector(getAuthObject);

  React.useEffect(() => {
    dispatch(setAuthFetching(true));
    getData('/auth/me', { withCredentials: true }).then(response => {
      if (response.resultCode === 0) {
        const { id, email, login } = response.data;
        dispatch(setUserData(id, email, login));
      }
    });
    dispatch(setAuthFetching(false));
  }, [dispatch]);

  return (
    <Header isUserAuth={isAuth} isAuthFetching={isFetching} loginName={login} />
  );
};

export default HeaderContainer;
