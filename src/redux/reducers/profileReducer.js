import types from '../actionTypes';
import shortid from 'shortid';
import {
  getData,
  savePhoto,
  saveProfile,
  updateMyStatus,
} from 'services/apiService';

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
  status: '',
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
      return { ...state, profile: { ...state.profile, ...payload } };
    }

    case types.SET_PROFILE_FETCHING_STATE:
      return {
        ...state,
        isProfileFetching: payload,
      };

    case types.SET_STATUS:
      return {
        ...state,
        status: payload,
      };

    case types.SET_PROFILE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, payload },
      };

    case types.SET_PROFILE_DATA:
      return {
        ...state,
        profile: { ...state.profile, ...payload },
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

export const setProfileStatus = status => ({
  type: types.SET_STATUS,
  payload: status,
});

export const savePhotoSuccess = photos => ({
  type: types.SET_PROFILE_PHOTO,
  payload: photos,
});

export const saveProfileSuccess = profile => ({
  type: types.SET_PROFILE_DATA,
  payload: profile,
});
/////////// redux thunk
export const getProfile = userId => dispatch => {
  dispatch(setProfileFetchingState(true));

  getData(`profile/${userId}`).then(res => {
    return dispatch(setUserProfile(res));
  });

  dispatch(setProfileFetchingState(false));
};

export const getProfileStatus = userId => dispatch => {
  getData(`profile/status/${userId}`).then(data => {
    return dispatch(setProfileStatus(data));
  });
};

export const updateStatus = status => dispatch => {
  updateMyStatus(status).then(response => {
    if (response.resultCode === 0) {
      dispatch(setProfileStatus(status));
      console.log(response);
      console.log(status);
    }
  });
};

export const savePhotoThunk = file => async dispatch => {
  const response = await savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  } else {
    console.log('File should has .jpg, .jpeg or .png extension');
  }
};

export const saveProfileThunk = profile => async dispatch => {
  const response = await saveProfile(profile);
  if (response.data.resultCode === 0) {
    console.log(response.data);
    dispatch(saveProfileSuccess(response.data.data));
  } else {
    console.log('Something went wrong:', response);
  }
};

export default profileReducer;
