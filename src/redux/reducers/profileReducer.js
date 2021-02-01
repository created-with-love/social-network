import types from '../actionTypes';
import shortid from 'shortid';

const initialState = {
  posts: [
    {
      id: 1,
      message: 'Hi, lads. How to became successful here?',
      likesCount: 2,
      isLiked: false,
    },
    {
      id: 2,
      message: 'It`s my first post!',
      likesCount: 12,
      isLiked: false,
    },
  ],
};

const profileReducer = (state = initialState, { type, payload }) => {
  if (type === types.ADD_POST) {
    const newPost = {
      id: shortid.generate(),
      message: payload,
      likesCount: 0,
      isLiked: false,
    };
    return {
      ...state,
      posts: [newPost, ...state.posts],
    };
  }
  if (type === types.TOGGLE_POST_LIKE) {
    const postLikeToggle = post => {
      post.likesCount = post.isLiked
        ? post.likesCount - 1
        : post.likesCount + 1;
      post.isLiked = !post.isLiked;
      return post;
    };

    return {
      ...state,
      posts: [
        ...state.posts.map(post => {
          return post.id === payload ? postLikeToggle(post) : post;
        }),
      ],
    };
  }
  return state;
};

export default profileReducer;
