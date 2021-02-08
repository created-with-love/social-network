import types from '../actionTypes';
import shortid from 'shortid';
import { getData } from 'services/apiService';

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
  profile: null,
  isProfileFetching: false,
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_POST: {
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

    case types.TOGGLE_POST_LIKE: {
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

    case types.SET_USER_PROFILE: {
      return { ...state, profile: payload };
    }

    case types.SET_PROFILE_FETCHING_STATE:
      return {
        ...state,
        isProfileFetching: payload,
      };

    default:
      return state;
  }
};

export const setUserProfile = profile => ({
  type: types.SET_USER_PROFILE,
  payload: profile,
});

export const setProfileFetchingState = isProfileFetching => ({
  type: types.SET_PROFILE_FETCHING_STATE,
  isProfileFetching,
});

/////////// redux thunk
export const getProfile = userId => dispatch => {
  dispatch(setProfileFetchingState(true));
  if (!userId) {
    userId = 2;
  }
  getData(`profile/${userId}`).then(res => {
    return dispatch(setUserProfile(res));
  });

  dispatch(setProfileFetchingState(false));
};

export default profileReducer;
