import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getDialogs } from '../../../redux/selectors';

import s from './MessageItem.module.css';

const myAva =
  'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png';

const MessageItem = ({ messageItem, userId }) => {
  const { id, message, myMessage } = messageItem;
  const dialogs = useSelector(getDialogs);
  const user = dialogs.find(dialog => dialog.id === userId);
  const dialogAvatar = user.avatar;

  if (!myMessage) {
    return (
      <div
        className={classNames({
          [s.message]: true,
          [s.myMessage]: myMessage,
        })}
        id={id}
      >
        <div>
          <img src={dialogAvatar} alt="userAvatar" className={s.avatar}></img>
        </div>
        <div>{message}</div>
      </div>
    );
  } else {
    return (
      <div
        className={classNames({
          [s.message]: true,
          [s.myMessage]: myMessage,
        })}
        id={id}
      >
        <div>{message}</div>
        <div>
          <img src={myAva} alt="myAvatar" className={s.avatar}></img>
        </div>
      </div>
    );
  }
};

export default MessageItem;
