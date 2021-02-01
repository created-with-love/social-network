import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMessage } from '../../redux/actions/actions';
import Dialogs from './Dialogs';
import { getDialogs } from '../../redux/selectors';

const DialogsContainer = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector(getDialogs);

  const [messageText, setMessageText] = useState('');
  const [activeDialog, setActiveDialog] = useState(1);
  const currentMessages = dialogs.find(dialog => dialog.id === activeDialog)
    .messages;

  const onDialogClick = useCallback(id => {
    setActiveDialog(id);
  }, []);

  const handleTextArea = useCallback(e => {
    setMessageText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(addMessage(activeDialog, messageText));
      setMessageText('');
    },
    [activeDialog, dispatch, messageText],
  );

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
