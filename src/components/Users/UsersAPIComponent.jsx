import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersPage } from '../../redux/selectors';

import {
  followAC,
  unfollowAC,
  setUsersAC,
  setTotalUsers,
  setCurrentPage,
  setFetchingState,
} from '../../redux/reducers/usersReducer';
// import { followUser, unfollowUser } from 'services/apiService';
import { getData } from 'services/apiService';
import UsersContainer from './Users.container';
import Loader from 'components/Loader';

const UsersAPIComponent = () => {
  const dispatch = useDispatch();

  const {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching,
  } = useSelector(getUsersPage);

  const totalPages =
    totalUsersCount > 0
      ? Math.ceil(totalUsersCount / pageSize)
      : totalUsersCount;

  React.useEffect(() => {
    if (users.length === 0) {
      dispatch(setFetchingState(true));
      getData(`users?count=${pageSize}`).then(resp => {
        dispatch(setTotalUsers(resp.totalCount));
        return dispatch(setUsersAC(resp.items));
      });
      return dispatch(setFetchingState(false));
    }
  }, [dispatch, users.length, pageSize]);

  const follow = userId => {
    dispatch(followAC(userId));
    // followUser(userId);
  };

  const unfollow = userId => {
    dispatch(unfollowAC(userId));
    // unfollowUser(userId);
  };

  const handleChange = (_, value) => {
    dispatch(setCurrentPage(value));
    dispatch(setFetchingState(true));
    // setHistory(query, value);
    getData(`/users?page=${value}&count=${pageSize}`).then(resp => {
      return dispatch(setUsersAC(resp.items));
    });
    dispatch(setFetchingState(false));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isFetching ? <Loader /> : null}
      <UsersContainer
        usersArr={users}
        follow={follow}
        unfollow={unfollow}
        totalPages={totalPages}
        currentPage={currentPage}
        handleChange={handleChange}
      />
    </>
  );
};

export default UsersAPIComponent;
