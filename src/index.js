import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { configureStore } from './store';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashBoard from './components/DashBoard';
import Feed from './components/Feed';
import Favorites from './components/Favorites';
import YouTube from './components/socialmedia/YouTube'

import Login from './components/form/Login';
import SignUp from './components/form/SignUp';
import PasswordReset from './components/form/PasswordReset';

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/password-reset" component={PasswordReset}/>
              <Route path="/dashboard" component={DashBoard}/>
              <Route path="/favorites" component={Favorites}/>
              <Route path="/feed" component={Feed}/>
              <Route path="/youtube" component={YouTube}/>
            </Switch>
          </BrowserRouter>
        </Provider>,
    document.getElementById('root'));
registerServiceWorker();
