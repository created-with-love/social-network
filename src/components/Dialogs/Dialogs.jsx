import React, { useState } from 'react';
import classNames from 'classnames';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = ({ state }) => {
  const { dialogs, messages } = state;
  const [messageText, setMessageText] = useState('');
  const [activeDialog, setActiveDialog] = useState(1);

  const onDialogClick = id => {
    setActiveDialog(id);
  };

  const handleTextArea = e => {
    setMessageText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setMessageText('');
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map(({ name, id, avatar }, index) => (
          <DialogItem
            name={name}
            id={id}
            key={`id-${id}`}
            avatar={avatar}
            active={activeDialog === id ? true : false}
            onDialogClick={onDialogClick}
          />
        ))}
      </div>
      <div className={s.messages}>
        {messages.map(({ id, message }) => (
          <MessageItem message={message} id={id} key={id} />
        ))}
        <form>
          <div onSubmit={handleSubmit}>
            <textarea
              value={messageText}
              className={classNames([s.formTextarea], 'form-control')}
              aria-label="With textarea"
              onChange={handleTextArea}
              autoFocus={true}
            ></textarea>
          </div>
          <div className={s.sendMessageContainer}>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dialogs;
