import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';

import { getProfile } from 'redux/reducers/profileReducer';
import { getProfileFetchingStatus, getUserProfilePage } from 'redux/selectors';
import Loader from 'components/Loader';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  state = {
    isProfileLoading: this.props.isProfileFetching,
  };

  componentDidMount() {
    let userId = this.props.match.params.userId;

    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <>
        {this.state.isProfileLoading ? (
          <Loader />
        ) : (
          <Profile {...this.props} profile={this.props.profile} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isProfileFetching: getProfileFetchingStatus(state),
  profile: getUserProfilePage(state),
});

const mapDispatchToProps = dispatch => ({
  getUserProfile: id => dispatch(getProfile(id)),
});

// обёртка для получения параметров url
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithUrlDataContainerComponent);
