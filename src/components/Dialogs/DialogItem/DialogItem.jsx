import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const Dialog = ({ name, id }) => {
  return (
    <div className={s.dialog} id={id}>
      <NavLink
        to={`/dialogs/${id}`}
        activeClassName={s.activeDialog}
        className={s.dialogLink}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default Dialog;
