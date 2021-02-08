import types from '../actionTypes';
import { getData } from 'services/apiService';
import { followUser, unfollowUser } from 'services/apiService';
// import shortid from 'shortid';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingUser: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FOLLOW:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === payload
            ? { ...user, ...user.location, followed: true }
            : user,
        ),
      };

    case types.UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === payload
            ? { ...user, ...user.location, followed: false }
            : user,
        ),
      };

    case types.SET_USERS:
      return {
        ...state,
        // users: [...state.users, ...payload],
        users: [...payload],
      };

    case types.SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: payload,
      };

    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    case types.SET_FETCHING_STATE:
      return {
        ...state,
        isFetching: payload,
      };

    case types.TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingUser: payload.status
          ? [...state.isFollowingUser, payload.id]
          : [...state.isFollowingUser.filter(id => id !== payload.id)],
      };

    default:
      return state;
  }
};

////////////// actions
export const followAC = userId => ({ type: types.FOLLOW, payload: userId });
export const unfollowAC = userId => ({
  type: types.UNFOLLOW,
  payload: userId,
});
export const setUsersAC = users => ({
  type: types.SET_USERS,
  payload: users,
});
export const setTotalUsers = count => ({
  type: types.SET_TOTAL_USERS_COUNT,
  payload: count,
});
export const setCurrentPage = page => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});
export const setFetchingState = dataIsFetching => ({
  type: types.SET_FETCHING_STATE,
  payload: dataIsFetching,
});

//follow button will be disabled if following in progress
export const toggleFollowingProgress = (status, id) => ({
  type: types.TOGGLE_IS_FOLLOWING_PROGRESS,
  payload: {
    status,
    id,
  },
});

/////////// redux thunk async functions

export const getUsersThunk = (pageSize, currentPage = 1) => dispatch => {
  dispatch(setFetchingState(true));
  dispatch(setCurrentPage(currentPage));
  getData(`users?page=${currentPage}&count=${pageSize}`).then(resp => {
    dispatch(setTotalUsers(resp.totalCount));
    dispatch(setUsersAC(resp.items));
  });
  dispatch(setFetchingState(false));
};

export const followThunk = userId => dispatch => {
  dispatch(toggleFollowingProgress(true, userId)); // thunk

  followUser(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(followAC(userId));
    } else {
      console.log(data.message);
    }
  });

  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollowThunk = userId => dispatch => {
  dispatch(toggleFollowingProgress(true, userId));

  unfollowUser(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(unfollowAC(userId));
    } else {
      console.log(data.message);
    }
  });

  dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;
