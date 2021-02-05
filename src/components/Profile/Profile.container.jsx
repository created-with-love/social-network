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

class ProfileContainer extends React.Component {
  state = {
    isProfileLoading: this.props.isProfileFetching,
  };

  componentDidMount() {
    setProfileFetchingState(true);
    getData(`profile/${2}`).then(res => {
      //   console.log(res);
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

export default connect(mapStateToProps, {
  setUserProfile,
  setProfileFetchingState,
})(ProfileContainer);
