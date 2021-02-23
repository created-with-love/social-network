import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from 'components/Loader/Loader';
import ProfileData from '../ProfileData';
import ProfileDataForm from '../ProfileDataForm';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = React.useState(false);
  const [contacts, setContacts] = React.useState({
    github: '',
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: '',
  });

  const saveContactsForm = newContacts => {
    setContacts({
      ...contacts,
      ...newContacts,
    });
  };

  const onEditBtnClick = () => {
    setEditMode(true);
  };

  const onProfileDataSubmit = data => {
    setEditMode(false);
    console.log({ ...data, contacts });
    saveProfile({ ...data, contacts });
  };

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  if (!profile) {
    return <Loader />;
  } else {
    return (
      <div className={s.profileInfo} id={profile.userId}>
        <div className={s.descriptionBlock}>
          <div>
            <img
              src={
                profile.photos.large
                  ? profile.photos.large
                  : 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png'
              }
              alt={profile.fullName ? profile.fullName : 'small user avatar'}
              className={s.avatar}
            />
            {!isOwner && editMode && (
              <input type="file" onChange={onMainPhotoSelected} />
            )}
          </div>

          {editMode ? (
            <ProfileDataForm
              profile={profile}
              status={status}
              updateStatus={updateStatus}
              onClick={onProfileDataSubmit}
              saveContactsForm={saveContactsForm}
            />
          ) : (
            <ProfileData
              profile={profile}
              status={status}
              updateStatus={updateStatus}
              isOwner={isOwner}
              onClick={onEditBtnClick}
            />
          )}
        </div>
      </div>
    );
  }
};

<span className={s.infoLine}></span>;

export default ProfileInfo;
