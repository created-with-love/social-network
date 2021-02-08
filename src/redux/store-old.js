// import { createStore } from 'redux';
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';

// const store = createStore();
const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Hi, lads. How to became successful here?',
          likesCount: 2,
        },
        {
          id: 2,
          message: 'It`s my first post!',
          likesCount: 12,
        },
      ],
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: 'Tanya',
          avatar:
            'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
        },
        {
          id: 2,
          name: 'Valera',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU',
        },
        {
          id: 3,
          name: 'Victor',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU',
        },
        {
          id: 4,
          name: 'Sasha',
          avatar:
            'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
        },
        {
          id: 5,
          name: 'Maria',
          avatar:
            'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
        },
        {
          id: 6,
          name: 'Natasha',
          avatar:
            'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png',
        },
      ],
    },
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  },
};

export default store;
window.store = store;
