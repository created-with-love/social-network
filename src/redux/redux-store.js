import { combineReducers, createStore, applyMiddleware } from 'redux';
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
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(thunk),
);

export default store;
