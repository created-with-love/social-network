import { getData, loginToSite, logoutFromSite } from 'services/apiService';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_FETCHING_STATE = 'SET_FETCHING_STATE';
const SET_AUTH_STATE = 'SET_AUTH_STATE';

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

    case SET_AUTH_STATE:
      return {
        ...state,
        isAuth: payload,
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

export const setAuthState = state => ({
  type: SET_AUTH_STATE,
  payload: state,
});

export const setAuthFetching = isAuthFetching => ({
  type: SET_FETCHING_STATE,
  payload: isAuthFetching,
});

////////// redux thunk
export const getCurrentUserThunk = dispatch => {
  dispatch(setAuthFetching(true));

  getData('/auth/me').then(response => {
    if (response.resultCode === 0) {
      const { id, email, login } = response.data;
      dispatch(setUserData(id, email, login));
    } else {
      console.log(response.message);
    }
  });
  dispatch(setAuthFetching(false));
};

export const loginThunk = (email, password, rememberMe) => dispatch => {
  dispatch(setAuthFetching(true));
  loginToSite(email, password, rememberMe).then(response => {
    if (response.resultCode === 0) {
      dispatch(setUserData(email, password, rememberMe));
      dispatch(setAuthState(true));
      getData('/auth/me');
    } else {
      console.log(response.message);
    }
    dispatch(setAuthFetching(false));
  });
};

export const logoutThunk = () => dispatch => {
  dispatch(setAuthFetching(true));
  logoutFromSite().then(response => {
    if (response.resultCode === 0) {
      dispatch(setUserData(null, null, null));
      dispatch(setAuthState(false));
    } else {
      console.log(response.message);
    }
  });
  dispatch(setAuthFetching(false));
};

export default authReducer;
