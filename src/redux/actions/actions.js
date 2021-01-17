import types from '../actionTypes';

export const addPost = postText => {
  return {
    type: types.ADD_POST,
    payload: postText,
  };
};

export const addMessage = (userId, messageText) => ({
  type: types.ADD_MESSAGE,
  payload: {
    messageText,
    userId,
  },
});
