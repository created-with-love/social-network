import React from 'react';

import s from './User.module.css';

const User = ({ user, follow, unfollow }) => {
  const { id, fullName, status, followed, location, imgUrl } = user;

  const followUser = () => {
    follow(id);
  };

  const unfollowUser = () => {
    unfollow(id);
  };

  return (
    <li id={id} className={s.userItem}>
      <div>
        <div>
          <img
            alt="userAvatar"
            src={imgUrl}
            width="60"
            height="60"
            className={s.avatar}
          />
        </div>
        <div>
          <button type="button" onClick={followed ? unfollowUser : followUser}>
            {followed ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>

      <div>
        <div>{fullName}</div>
        <div>{status}</div>
      </div>
      <div>
        <div>{location.country}</div>
        <div>{location.city}</div>
      </div>
    </li>
  );
};

export default User;
