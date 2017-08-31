import React from 'react';
import { SET_COMPONENT_ACTIVE, CLEAR_ACTIVE } from '../actions/nav_bar_actions';
import { merge } from 'lodash';

const NavBarReducer = (state = {active: null}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case SET_COMPONENT_ACTIVE:
      nextState = merge({}, state);
      nextState.active = action.component;
      return nextState;
    case CLEAR_ACTIVE:
      nextState = merge({}, state);
      nextState.active = null;
      return nextState;
    default:
      return state;
  }
};

export default NavBarReducer;
