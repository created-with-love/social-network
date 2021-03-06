import types from '../actionTypes';
import shortid from 'shortid';

const initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Tanya',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
      messages: [
        {
          id: 1,
          message: 'Hello!',
          myMessage: false,
        },
        {
          id: 2,
          message: 'What`s up, mate?',
          myMessage: true,
        },
        {
          id: 3,
          message: 'Have some info for you..',
          myMessage: false,
        },
        {
          id: 4,
          message: 'When could I call you? ',
          myMessage: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Valera',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU',
      messages: [],
    },
    {
      id: 3,
      name: 'Victor',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU',
      messages: [],
    },
    {
      id: 4,
      name: 'Sasha',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
      messages: [],
    },
    {
      id: 5,
      name: 'Maria',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
      messages: [],
    },
    {
      id: 6,
      name: 'Natasha',
      avatar:
        'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
      messages: [],
    },
  ],
};

const dialogsReducer = (state = initialState, { type, payload }) => {
  if (type === types.ADD_MESSAGE) {
    const newMessage = {
      id: shortid.generate(),
      message: payload.messageText,
      myMessage: true,
    };

    // const currentDialog = state.dialogs.find(
    //   (dialog) => dialog.id === payload.userId
    // );
    // currentDialog.messages = [...currentDialog.messages, newMessage];

    return {
      ...state,
      dialogs: [
        ...state.dialogs.map(dialog => {
          return dialog.id === payload.userId
            ? { ...dialog, messages: [...dialog.messages, newMessage] }
            : { ...dialog, messages: [...dialog.messages] };
        }),
      ],
    };
  }

  return state;
};

export default dialogsReducer;
