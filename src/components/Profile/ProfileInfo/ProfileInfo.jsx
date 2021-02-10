import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from 'components/Loader/Loader';
import { MdDone } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Loader />;
  } else {
    return (
      <div className={s.profileInfo} id={profile.userId}>
        {/* <div className={s.profileBGImage}></div> */}
        <div className={s.descriptionBlock}>
          <img
            src={
              profile.photos.large
                ? profile.photos.large
                : 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png'
            }
            alt={profile.fullName ? profile.fullName : 'small user avatar'}
            className={s.avatar}
          />
          <div className={s.userDescription}>
            <h3>{profile.fullName ? profile.fullName : 'Anonymous'}</h3>
            <div>
              <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
            <div>
              <span className={s.infoLine}>About me: </span>
              {profile.aboutMe}
            </div>
            <div>
              <span className={s.infoLine}> Looking for job: </span>
              {profile.lookingForAJob ? <MdDone /> : <ImCross />}{' '}
            </div>
            <div>
              <span className={s.infoLine}>Job`s description: </span>
              {profile.lookingForAJobDescription}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

<span className={s.infoLine}></span>;

export default ProfileInfo;
