import React from 'react';
import s from './Sidebar.module.css';
import state from '../../redux/state';
const { friends } = state.sidebar;

const Sidebar = () => {
  return (
    <div className={s.friendsContainer}>
      <h3 className={s.friendsTitle}>Friends</h3>
      <div className={s.friendsList}>
        {friends.map(({ avatar, name, id }) => (
          <div key={id}>
            <img src={avatar} alt={name} id={id} className={s.friendAva} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
