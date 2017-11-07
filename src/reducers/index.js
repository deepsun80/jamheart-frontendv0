import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import linkValueReducer from './linkValueReducer';

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    linkValueReducer,
    form: reduxFormReducer,
    router: routerReducer
});

export default rootReducer;
