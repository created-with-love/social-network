import React from 'react';
import MyPosts from './MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile({ postsData }) {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
}
