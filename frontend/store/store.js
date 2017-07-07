import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

function configureStore(preloadedState = {}){
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware()
  );
}

export default configureStore;
