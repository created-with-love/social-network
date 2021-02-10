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
} from 'redux/selectors';
import Loader from 'components/Loader';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  state = {
    isProfileLoading: this.props.isProfileFetching,
  };

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
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
