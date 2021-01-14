import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = ({ dialogsData, messagesData }) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsData.map(({ name, id }) => (
          <DialogItem name={name} id={id} key={`id-${id}`} />
        ))}
      </div>
      <div className={s.messages}>
        {messagesData.map(({ id, message }) => (
          <MessageItem message={message} id={id} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
