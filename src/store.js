import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import ReduxPromise from 'redux-promise';


export const configureStore = (initialState) => {
  const store = createStore(rootReducer,
    initialState,
    applyMiddleware(reduxThunk, ReduxPromise),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}
