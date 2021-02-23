import {
  getData,
  loginToSite,
  logoutFromSite,
  securityAPI,
} from 'services/apiService';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_FETCHING_STATE = 'SET_FETCHING_STATE';
const SET_AUTH_STATE = 'SET_AUTH_STATE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
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

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: payload,
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

export const setCaptchaUrl = url => ({
  type: SET_CAPTCHA_URL,
  payload: url,
});

////////// redux thunk
export const getCurrentUserThunk = dispatch => {
  dispatch(setAuthFetching(true));

  getData('/auth/me').then(response => {
    if (response.resultCode === 0) {
      const { id, email, login } = response.data;
      dispatch(setUserData(id, email, login));
    } else {
      console.log(response.messages[0]);
    }
  });
  dispatch(setAuthFetching(false));
};

export const loginThunk = (
  email,
  password,
  rememberMe,
  captcha,
) => dispatch => {
  dispatch(setAuthFetching(true));
  loginToSite(email, password, rememberMe, captcha)
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(setUserData(email, password, rememberMe));
        dispatch(setAuthState(true));
        getData('/auth/me');
      } else if (response.resultCode === 10) {
        dispatch(getCaptchaUrlThunk());
      } else {
        console.log(response.message);
      }
    })
    .catch(error => console.log(error))
    .finally(dispatch(setAuthFetching(false)));
};

export const logoutThunk = () => dispatch => {
  dispatch(setAuthFetching(true));
  logoutFromSite()
    .then(response => {
      if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null));
        dispatch(setAuthState(false));
      } else {
        console.log(response.message);
      }
    })
    .catch(error => console.log(error))
    .finally(dispatch(setAuthFetching(false)));
};

export const getCaptchaUrlThunk = () => async dispatch => {
  const response = await securityAPI.getCaptcha();
  const captchaUrl = response.data.url;
  dispatch(setCaptchaUrl(captchaUrl));
};

export default authReducer;
