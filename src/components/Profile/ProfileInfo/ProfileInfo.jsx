import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div>
        <img
          src="https://pbs.twimg.com/media/DgZORr-XUAEBV7u.jpg"
          alt="content-img"
          className={s.contentImg}
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
          alt="111"
          className={s.avatar}
        />
        Profile description
      </div>
    </div>
  );
};

export default ProfileInfo;
