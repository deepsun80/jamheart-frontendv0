import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import ReduxPromise from 'redux-promise';

import history from './myHistory';

import { routerMiddleware } from 'react-router-redux'


export const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(reduxThunk, ReduxPromise, routerMiddleware(history)),
    )
  );
  return store;
}
