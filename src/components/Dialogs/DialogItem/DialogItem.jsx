import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import s from './DialogItem.module.css';

const Dialog = ({ avatar, name, id, onDialogClick, active }) => {
  return (
    <div
      className={classNames({
        [s.dialog]: true,
        [s.active]: active,
      })}
      id={id}
      onClick={() => onDialogClick(id)}
    >
      <img src={avatar} alt={`${name}-avatar`} className={s.avatar} />
      <NavLink to={`/dialogs/${id}`} className={s.dialogLink}>
        {name}
      </NavLink>
    </div>
  );
};

export default Dialog;
