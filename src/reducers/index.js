import { combineReducers } from 'redux';
import linkValueReducer from './linkValueReducer';

const rootReducer = combineReducers({
    linkValueReducer,
});

export default rootReducer;
