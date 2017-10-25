import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { configureStore } from './store';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashBoard from './components/DashBoard';
import Feed from './components/Feed';
import Favorites from './components/Favorites';
import YouTube from './components/socialmedia/YouTube'

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route path="/dashboard" component={DashBoard}/>
              <Route path="/favorites" component={Favorites}/>
              <Route path="/feed" component={Feed}/>
              <Route path="/youtube" component={YouTube}/>
            </Switch>
          </BrowserRouter>
        </Provider>,
    document.getElementById('root'));
registerServiceWorker();
