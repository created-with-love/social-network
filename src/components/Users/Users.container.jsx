import React from 'react';
import s from './Users.module.css';
import User from './User/User';

import Pagination from '../Pagination';

const UsersContainer = ({
  usersArr,
  follow,
  unfollow,
  totalPages,
  currentPage,
  handleChange,
  isFollowingUser,
}) => {
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
              isFollowingUser={isFollowingUser}
            />
          ))}
      </ul>
      <div className={s.buttonBox}>
        <Pagination
          itemsArray={usersArr}
          totalPages={totalPages}
          page={currentPage}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default UsersContainer;
