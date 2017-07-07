import React from 'react';
import Youtube from './youtube';
import { connect } from 'react-redux';
import { setComponentActive } from '../../actions/nav_bar_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    setDashboardActive: () => dispatch(setComponentActive("dashboard"))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Youtube);
