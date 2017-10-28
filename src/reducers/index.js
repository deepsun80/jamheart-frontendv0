import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import linkValueReducer from './linkValueReducer';

const rootReducer = combineReducers({
    linkValueReducer,
    form: reduxFormReducer,
});

export default rootReducer;
