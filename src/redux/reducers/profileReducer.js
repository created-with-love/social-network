import types from '../actionTypes';
import shortid from 'shortid';

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  if (action.type === types.ADD_POST) {
    const newPost = {
      id: shortid.generate(),
      message: action.payload,
      likesCount: 0,
    };
    state.posts.unshift(newPost);
  }
  return state;
};

export default profileReducer;
