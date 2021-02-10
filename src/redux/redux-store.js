import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import dialogsReducer from './reducers/dialogsReducer';
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
