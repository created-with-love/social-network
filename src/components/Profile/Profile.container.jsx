import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import { getData } from 'services/apiService';
import {
  setUserProfile,
  setProfileFetchingState,
} from 'redux/reducers/profileReducer';
import { getProfileFetchingStatus, getUserProfilePage } from 'redux/selectors';
import Loader from 'components/Loader';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  state = {
    isProfileLoading: this.props.isProfileFetching,
  };

  componentDidMount() {
    setProfileFetchingState(true);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    getData(`profile/${userId}`).then(res => {
      return this.props.setUserProfile(res);
    });
    setProfileFetchingState(false);
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

// обёртка для получения параметров url
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
  setProfileFetchingState,
})(WithUrlDataContainerComponent);
