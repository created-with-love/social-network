const SET_USER_DATA = 'SET_USER_DATA';
const SET_FETCHING_STATE = 'SET_FETCHING_STATE';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...payload,
        isAuth: true,
      };

    case SET_FETCHING_STATE:
      return {
        ...state,
        isFetching: payload,
      };

    default:
      return state;
  }
};

// actions
export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
  },
});

export const setAuthFetching = isAuthFetching => ({
  type: SET_FETCHING_STATE,
  payload: isAuthFetching,
});

export default authReducer;
