import React from 'react';
import s from './MessageItem.module.css';

const MessageItem = ({ message, id }) => {
  return (
    <div className={s.message} id={id}>
      {message}
    </div>
  );
};

export default MessageItem;
