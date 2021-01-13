import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink
            to="/dialogs/1"
            activeClassName={s.activeDialog}
            className={s.dialogLink}
          >
            Artem
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/3"
            activeClassName={s.activeDialog}
            className={s.dialogLink}
          >
            Vova
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/4"
            activeClassName={s.activeDialog}
            className={s.dialogLink}
          >
            Valera
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/5"
            activeClassName={s.activeDialog}
            className={s.dialogLink}
          >
            Taras
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="/dialogs/6"
            activeClassName={s.activeDialog}
            className={s.dialogLink}
          >
            Masha
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello!</div>
        <div className={s.message}>What`s up, mate?</div>
        <div className={s.message}>Have some info for you...</div>
        <div className={s.message}>When could I call you? </div>
      </div>
    </div>
  );
};

export default Dialogs;
