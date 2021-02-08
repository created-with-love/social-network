import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUsersThunk,
  followThunk,
  unfollowThunk,
} from 'redux/reducers/usersReducer';
import { getUsersPage } from '../../redux/selectors';

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
    isFollowingUser,
  } = useSelector(getUsersPage);

  const totalPages =
    totalUsersCount > 0
      ? Math.ceil(totalUsersCount / pageSize)
      : totalUsersCount;

  React.useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsersThunk(pageSize));
    }
  }, [users.length, dispatch, pageSize]);

  const follow = useCallback(
    userId => {
      dispatch(followThunk(userId));
    },
    [dispatch],
  );

  const unfollow = useCallback(
    userId => {
      dispatch(unfollowThunk(userId));
    },
    [dispatch],
  );

  const handleChange = (_, value) => {
    dispatch(getUsersThunk(pageSize, value)); // thunk
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
        isFollowingUser={isFollowingUser}
      />
    </>
  );
};

export default UsersAPIComponent;
