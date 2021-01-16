import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileBGImage}></div>
      <div className={s.descriptionBlock}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
          alt="111"
          className={s.avatar}
        />
        <div className={s.userDescription}>
          <h3>Secret Ninja</h3>
          <p>Ukraine, Kiev</p>
          <p>Status: single</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
