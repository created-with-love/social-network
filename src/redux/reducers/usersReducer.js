import types from '../actionTypes';
// import shortid from 'shortid';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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

    default:
      return state;
  }
};

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

export default usersReducer;
