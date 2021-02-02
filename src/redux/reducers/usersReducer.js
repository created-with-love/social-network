import types from '../actionTypes';
// import shortid from 'shortid';

const initialState = {
  users: [],
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
        users: [...state.users, ...payload],
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

export default usersReducer;
