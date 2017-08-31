import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NavBarReducer from './nav_bar_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  navBar: NavBarReducer
});

export default rootReducer
