import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getUsers,
  getTotalUsersCount,
  getUsersPageSize,
  getCurrentPage,
} from '../../redux/selectors';
import s from './Users.module.css';
import User from './User/User';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setTotalUsers,
  setCurrentPage,
} from '../../redux/reducers/usersReducer';
// import { followUser, unfollowUser } from 'services/apiService';
import { getData } from 'services/apiService';
import Pagination from '../Pagination';

const Users = () => {
  const dispatch = useDispatch();
  const usersArr = useSelector(getUsers);
  const usersPerPage = useSelector(getUsersPageSize);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);

  const totalPages =
    totalUsersCount > 0
      ? Math.ceil(totalUsersCount / usersPerPage)
      : totalUsersCount;

  React.useEffect(() => {
    if (usersArr.length === 0) {
      getData(`/users?count=${usersPerPage}`).then(resp => {
        dispatch(setTotalUsers(resp.totalCount));
        return dispatch(setUsersAC(resp.items));
      });
    }
  }, [dispatch, usersArr.length, usersPerPage]);

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
    // setHistory(query, value);
    getData(`/users?page=${value}&count=${usersPerPage}`).then(resp => {
      return dispatch(setUsersAC(resp.items));
    });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ul className={s.usersList}>
        {usersArr &&
          usersArr.map(user => (
            <User
              key={user.id}
              user={user}
              follow={follow}
              unfollow={unfollow}
            />
          ))}
      </ul>
      <div className={s.buttonBox}>
        {totalPages && (
          <Pagination
            itemsArray={usersArr}
            totalPages={totalPages}
            page={currentPage}
            handleChange={handleChange}
          />
        )}
      </div>
    </>
  );
};

export default Users;
