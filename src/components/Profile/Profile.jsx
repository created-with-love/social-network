import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile({ profile }) {
  return (
    <div className={s.profile}>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  );
}
