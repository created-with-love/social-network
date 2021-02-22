export const getPosts = state => state.profilePage.posts;
export const getDialogs = state => state.dialogsPage.dialogs;
export const getFriends = state => state.sidebar.friends;

// users page
export const getUsersPage = state => state.usersPage;
export const getUsers = state => state.usersPage.users;
export const getUsersPageSize = state => state.usersPage.pageSize;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getFetchingStatus = state => state.usersPage.isFetching;

//profile page

export const getProfileFetchingStatus = state =>
  state.profilePage.isProfileFetching;
export const getUserProfilePage = state => state.profilePage.profile;
export const getProfileStatusSelector = state => state.profilePage.status;

//auth
export const getAuthObject = state => state.auth;
export const getAuthFetching = state => state.auth.isFetching;
export const getAuthStatus = state => state.auth.isAuth;
export const getAuthLogin = state => state.auth.login;
export const getUserId = state => state.auth.userId;
