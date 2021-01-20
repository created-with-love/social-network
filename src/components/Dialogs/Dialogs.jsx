import React from 'react';
import classNames from 'classnames';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = ({
  dialogs,
  onChange,
  onSubmit,
  onClick,
  currentMessages,
  messageText,
  activeDialog,
}) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs &&
          dialogs.map(({ name, id, avatar }) => (
            <DialogItem
              name={name}
              id={id}
              key={`id-${id}`}
              avatar={avatar}
              active={activeDialog === id ? true : false}
              onDialogClick={() => onClick(id)}
            />
          ))}
      </div>
      <div className={s.messages}>
        {currentMessages.map(item => (
          <MessageItem messageItem={item} key={item.id} userId={activeDialog} />
        ))}
        <form onSubmit={onSubmit}>
          <div>
            <textarea
              value={messageText}
              className={classNames([s.formTextarea], 'form-control')}
              aria-label="With textarea"
              onChange={onChange}
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
