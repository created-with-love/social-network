import React from 'react';
import s from './Sidebar.module.css';
import store from '../../redux/redux-store';

const state = store.getState();
const { friends } = state.sidebar;

const Sidebar = () => {
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
