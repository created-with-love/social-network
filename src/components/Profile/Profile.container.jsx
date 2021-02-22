import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import {
  getProfile,
  getProfileStatus,
  updateStatus,
} from 'redux/reducers/profileReducer';
import {
  getProfileFetchingStatus,
  getUserProfilePage,
  getProfileStatusSelector,
  getUserId,
} from 'redux/selectors';
import Loader from 'components/Loader';
import { withRouter } from 'react-router-dom';

const createHistory = require('history').createBrowserHistory;

const history = createHistory();

class ProfileContainer extends React.Component {
  state = {
    isProfileLoading: this.props.isProfileFetching,
  };

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
      <>
        {this.state.isProfileLoading ? (
          <Loader />
        ) : (
          <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isProfileFetching: getProfileFetchingStatus(state),
  profile: getUserProfilePage(state),
  status: getProfileStatusSelector(state),
  userId: getUserId(state),
});

const mapDispatchToProps = dispatch => ({
  getUserProfile: id => dispatch(getProfile(id)),
  getProfileStatus: id => dispatch(getProfileStatus(id)),
  updateStatus: status => dispatch(updateStatus(status)),
});

// обёртка для получения параметров url
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithUrlDataContainerComponent);
