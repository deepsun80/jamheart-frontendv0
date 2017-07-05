import React from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
