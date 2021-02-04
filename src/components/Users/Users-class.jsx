import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../../redux/selectors';
import s from './Users.module.css';
import User from './User/User';
import {
  followAC,
  unfollowAC,
  setUsersAC,
} from '../../redux/reducers/usersReducer';
import { getData } from 'services/apiService';

class Users extends React.Component {
  componentDidMount() {
    if (this.props.usersArr.length === 0) {
      getData('/users').then(resp => this.props.setNewUsers(resp.items));
    }
  }

  render() {
    const { usersArr, follow, unfollow } = this.props;
    return (
      <ul className={s.usersList}>
        {usersArr.length > 0 &&
          usersArr.map(user => (
            <User
              key={user.id}
              user={user}
              follow={follow}
              unfollow={unfollow}
            />
          ))}
      </ul>
    );
  }
}

const mapStateToProst = state => ({
  usersArr: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  unfollow: userId => {
    dispatch(unfollowAC(userId));
  },
  follow: userId => {
    dispatch(followAC(userId));
  },
  setNewUsers: response => {
    dispatch(setUsersAC(response));
  },
});

export default connect(mapStateToProst, mapDispatchToProps)(Users);
