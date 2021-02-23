import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { MdDone } from 'react-icons/md';
import { ImCross } from 'react-icons/im';

import ProfileStatus from '../ProfileInfo/ProfileStatus';
import s from './ProfileDataForm.module.css';
import ContactsForm from '../Contacts/ContactsForm';

const ProfileDataForm = ({
  profile,
  status,
  updateStatus,
  onClick,
  saveContactsForm,
}) => {
  const [isLookingForJob, setIsLookingForJob] = useState(
    profile.lookingForAJob,
  );
  const [fullName, setFullName] = useState(
    profile.fullName ? profile.fullName : 'Anonymous',
  );
  const [aboutMe, setAboutMe] = useState(profile.aboutMe || '');
  const [lookingForAJobDescription, setLookingForAJobDescription] = useState(
    profile.lookingForAJobDescription || '',
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleChange = e => {
    switch (e.target.name) {
      case 'fullName':
        setFullName(e.target.value);
        break;
      case 'aboutMe':
        setAboutMe(e.target.value);
        break;
      case 'lookingForAJobDescription':
        setLookingForAJobDescription(e.target.value);
        break;

      default:
        return;
    }
  };

  const onSubmit = data => {
    const newData = {
      ...data,
      lookingForAJob: isLookingForJob,
      fullName,
      lookingForAJobDescription,
    };

    onClick(newData);
  };

  return (
    <>
      <form className={s.userDescription} onSubmit={handleSubmit(onSubmit)}>
        <input
          name="fullName"
          ref={register({ required: false })}
          type="text"
          value={fullName}
          onChange={handleChange}
        />

        <div>
          <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
        <div>
          <span className={s.infoLine}>About me: </span>
          <textarea
            ref={register({ required: false })}
            name="aboutMe"
            type="text"
            value={aboutMe}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={s.saveBtn} disabled={isSubmitting}>
          Save
        </button>

        <div onClick={() => setIsLookingForJob(state => !state)}>
          <span className={s.infoLine}> Looking for a job: </span>
          {isLookingForJob ? <MdDone /> : <ImCross />}{' '}
        </div>
        {isLookingForJob && (
          <div>
            <span className={s.infoLine}> Skills: </span>
            <textarea
              ref={register({ required: false })}
              name="lookingForAJobDescription"
              type="text"
              value={lookingForAJobDescription}
              onChange={handleChange}
            />
          </div>
        )}
      </form>
      {profile.contacts && (
        <div>
          <span className={s.infoLine}> Contacts: </span>

          <ContactsForm
            contacts={profile.contacts}
            saveContactsForm={saveContactsForm}
          />
        </div>
      )}
    </>
  );
};

export default ProfileDataForm;
