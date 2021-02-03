import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { getUsers } from '../../redux/selectors';
import s from './Users.module.css';
import User from './User/User';
import {
  followAC,
  unfollowAC,
  setUsersAC,
} from '../../redux/reducers/usersReducer';
import { getData } from 'services/apiService';

const Users = () => {
  const dispatch = useDispatch();
  const usersArr = useSelector(getUsers);

  React.useLayoutEffect(() => {
    if (usersArr.length === 0) {
      getData('/users').then(resp => dispatch(setUsersAC(resp.items)));
    }
  }, [dispatch, usersArr.length]);

  const follow = userId => {
    dispatch(followAC(userId));
  };

  const unfollow = userId => {
    dispatch(unfollowAC(userId));
  };

  return (
    <ul className={s.usersList}>
      {usersArr.length > 0 &&
        usersArr.map(user => (
          <User key={user.id} user={user} follow={follow} unfollow={unfollow} />
        ))}
    </ul>
  );
};

export default Users;
