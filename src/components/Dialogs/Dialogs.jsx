import React, { useState } from 'react';
import classNames from 'classnames';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem/MessageItem';
import store from '../../redux/store';
import { addMessage } from '../../redux/actions/actions';

const Dialogs = ({ state }) => {
  const { dialogs } = state;
  const [messageText, setMessageText] = useState('');
  const [activeDialog, setActiveDialog] = useState(1);
  const currentMessages = dialogs.find(dialog => dialog.id === activeDialog)
    .messages;

  const onDialogClick = id => {
    setActiveDialog(id);
  };

  const handleTextArea = e => {
    setMessageText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    store.dispatch(addMessage(activeDialog, messageText));
    setMessageText('');
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs.map(({ name, id, avatar }) => (
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
        {currentMessages.map(messageItem => (
          <MessageItem
            messageItem={messageItem}
            key={messageItem.id}
            userId={activeDialog}
          />
        ))}
        <form onSubmit={handleSubmit}>
          <div>
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
