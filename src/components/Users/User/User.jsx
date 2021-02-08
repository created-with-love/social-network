import React from 'react';
import classNames from 'classnames';

import s from './User.module.css';
import { NavLink } from 'react-router-dom';
const defImg =
  'https://library.kissclipart.com/20181212/ble/kissclipart-icon-name-svg-clipart-computer-icons-user-d5f11bae643dfd07.jpg';

const User = ({ user, follow, unfollow, isFollowingUser }) => {
  const { id, name, status, followed, location, photos } = user;

  const followUser = () => {
    follow(id);
  };

  const unfollowUser = () => {
    unfollow(id);
  };

  return (
    <li id={id} className={s.userItem}>
      <div className={s.avatarNBtnBox}>
        <div>
          <NavLink to={`/profile/${id}`}>
            <img
              alt="userAvatar"
              src={photos?.small ? photos.small : defImg}
              width="80"
              height="80"
              className={s.avatar}
            />
          </NavLink>
        </div>
        <div className={s.followBtnBox}>
          <button
            className={classNames(s.button, {
              [s.followed]: followed,
              [s.unfollowed]: !followed,
            })}
            disabled={isFollowingUser.some(num => num === id)}
            type="button"
            onClick={followed ? unfollowUser : followUser}
          >
            {followed ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>

      <div className={s.nameNStatusBox}>
        <div className={s.name}>{name}</div>
        <div className={s.status}>
          {status && status.length > 39 ? `${status.slice(0, 38)}...` : status}
        </div>
      </div>
      {location && (
        <div className={s.locationBox}>
          <div className={s.country}>{location?.country}</div>
          <div className={s.city}>{location?.city}</div>
        </div>
      )}
    </li>
  );
};

export default User;
