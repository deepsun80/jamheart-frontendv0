import React from 'react';
import NavBar from './nav_bar';
import { connect } from 'react-redux';
import { setComponentActive, clearActive } from '../../actions/nav_bar_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    activeComponent: state.navBar.active
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    setComponentActive: component => dispatch(setComponentActive(component)),
    clearActive: () => dispatch(clearActive())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
