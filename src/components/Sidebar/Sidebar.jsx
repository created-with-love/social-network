import React from 'react';
import { useSelector } from 'react-redux';

import { getFriends } from '../../redux/selectors';
import s from './Sidebar.module.css';

const Sidebar = () => {
  const friends = useSelector(getFriends);
  return (
    <div className={s.friendsContainer}>
      <h4 className={s.friendsTitle}>Friends ({friends.length})</h4>
      <div className={s.friendsList}>
        {friends.map(({ avatar, name, id }) => (
          <div key={id} className={s.friendBox}>
            <img src={avatar} alt={name} id={id} className={s.friendAva} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
