import React, { useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = ({ status, updateStatus }) => {
  const [statusText, setStatusText] = useState(status);
  const [editMode, setEditMode] = useState(false);
  //   const dispatch = useDispatch();

  const handleInputChange = e => {
    setStatusText(e.currentTarget.value);
  };

  const activateStatus = () => {
    setEditMode(true);
  };

  const deactivateStatus = () => {
    setEditMode(false);
    updateStatus(statusText);
  };

  return (
    <div className={s.profileStatusBox}>
      {!editMode && (
        <div onDoubleClick={activateStatus} className={s.statusDiv}>
          <span>
            {statusText || <span className={s.setStatusText}>set status</span>}
          </span>
        </div>
      )}
      {editMode && (
        <div className={s.statusDiv}>
          <input
            autoFocus
            value={statusText}
            onChange={handleInputChange}
            name="status"
            onBlur={deactivateStatus}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(ProfileStatus);
