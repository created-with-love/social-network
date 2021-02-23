import React from 'react';

import { MdDone } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import ProfileStatus from '../ProfileInfo/ProfileStatus';
import Contacts from '../Contacts';
import s from './ProfileData.module.css';

const ProfileData = ({ profile, status, updateStatus, onClick, isOwner }) => {
  return (
    <div className={s.userDescription}>
      <h3>{profile.fullName ? profile.fullName : 'Anonymous'}</h3>
      <div>
        <ProfileStatus status={status} updateStatus={updateStatus} />
      </div>
      <div>
        <span className={s.infoLine}>About me: </span>
        {profile.aboutMe}
      </div>

      {!isOwner && (
        <button type="button" className={s.editBtn} onClick={onClick}>
          Edit
        </button>
      )}

      <div>
        <span className={s.infoLine}> Looking for a job: </span>
        {profile.lookingForAJob ? <MdDone /> : <ImCross />}{' '}
      </div>
      {profile.lookingForAJob && (
        <div>
          <span className={s.infoLine}> Skills: </span>
          {profile.lookingForAJobDescription}
        </div>
      )}

      {profile.contacts && (
        <div>
          <span className={s.infoLine}> Contacts: </span>

          <Contacts contacts={profile.contacts} />
        </div>
      )}
    </div>
  );
};

export default ProfileData;
