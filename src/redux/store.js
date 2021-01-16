import { createStore } from 'redux';
import shortid from 'shortid';

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
      messages: [
        {
          id: 1,
          message: 'Hello!',
        },
        {
          id: 2,
          message: 'What`s up, mate?',
        },
        {
          id: 3,
          message: 'Have some info for you..',
        },
        {
          id: 4,
          message: 'When could I call you? ',
        },
      ],
      dialogs: [
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
    switch (action.type) {
      case 'ADD-POST': {
        const newPost = {
          id: shortid.generate(),
          message: action.payload,
          likesCount: 0,
        };
        this._state.profilePage.posts.unshift(newPost);
        break;
      }
      case 'ADD-MESSAGE': {
        const newMessage = {
          id: shortid.generate(),
          message: action.payload,
        };
        this._state.dialogsPage.messages.push(newMessage);
        break;
      }
      default:
        return;
    }
  },
};

export default store;
window.store = store;
