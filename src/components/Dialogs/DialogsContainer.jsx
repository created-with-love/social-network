import React, { useState } from 'react';
import { addMessage } from '../../redux/actions/actions';
import Dialogs from './Dialogs';
import { getDialogs } from '../../redux/selectors';
import StoreContext from 'StoreContext';

const DialogsContainer = () => {
  const store = React.useContext(StoreContext);
  const dialogs = getDialogs(store.getState());

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
    <Dialogs
      dialogs={dialogs}
      onSubmit={handleSubmit}
      onChange={handleTextArea}
      onClick={onDialogClick}
      currentMessages={currentMessages}
      messageText={messageText}
      activeDialog={activeDialog}
    />
  );
};

export default DialogsContainer;
