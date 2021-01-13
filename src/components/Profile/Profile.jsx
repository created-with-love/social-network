import React from 'react';

import MyPosts from './MyPosts';
import './Profile.scss';

export default function Profile() {
  return (
    <>
      <div>
        <img
          src="https://pbs.twimg.com/media/DgZORr-XUAEBV7u.jpg"
          alt="content-img"
          className="content-img"
        />
      </div>
      <div>
        <img
          src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
          alt="111"
          className="avatar"
        />
        Profile description
      </div>
      <MyPosts />
    </>
  );
}
