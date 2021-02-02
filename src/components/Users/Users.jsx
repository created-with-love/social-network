import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../../redux/selectors';
import s from './Users.module.css';
import User from './User/User';
import {
  followAC,
  unfollowAC,
  setUsersAC,
} from '../../redux/reducers/usersReducer';

const staticUsers = [
  {
    id: 1,
    status: 'I`m looking for job...',
    fullName: 'Alex Kron',
    location: {
      city: 'Minsk',
      country: 'Belarus',
    },
    followed: false,
    imgUrl:
      'https://library.kissclipart.com/20181212/ble/kissclipart-icon-name-svg-clipart-computer-icons-user-d5f11bae643dfd07.jpg',
  },
  {
    id: 2,
    status: 'I`m hot girl',
    fullName: 'Maria Soviet',
    location: {
      city: 'Moscow',
      country: 'Russia',
    },
    followed: false,
    imgUrl:
      'https://library.kissclipart.com/20181212/ble/kissclipart-icon-name-svg-clipart-computer-icons-user-d5f11bae643dfd07.jpg',
  },
  {
    id: 3,
    status: 'Barista girl',
    fullName: 'Diana Smith',
    location: {
      city: 'Saint-Petersburg',
      country: 'Russia',
    },
    followed: true,
    imgUrl:
      'https://library.kissclipart.com/20181212/ble/kissclipart-icon-name-svg-clipart-computer-icons-user-d5f11bae643dfd07.jpg',
  },
  {
    id: 4,
    status: 'No pain, no gain',
    fullName: 'Bob Scooby',
    location: {
      city: 'Minsk',
      country: 'Belarus',
    },
    followed: true,
    imgUrl:
      'https://library.kissclipart.com/20181212/ble/kissclipart-icon-name-svg-clipart-computer-icons-user-d5f11bae643dfd07.jpg',
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const usersArr = useSelector(getUsers);

  const fetchUsers = users => {
    if (usersArr.length === 0) {
      dispatch(setUsersAC(users));
    }
  };

  React.useEffect(() => {
    fetchUsers(staticUsers);
  }, []);

  const follow = userId => {
    dispatch(followAC(userId));
  };

  const unfollow = userId => {
    dispatch(unfollowAC(userId));
  };

  return (
    <>
      {usersArr.length > 0 &&
        usersArr.map(user => (
          <User key={user.id} user={user} follow={follow} unfollow={unfollow} />
        ))}
    </>
  );
};

export default Users;
