import React from 'react';
import { Provider } from 'react-redux';
import App from '../app';
import { Route, HashRouter } from 'react-router-dom';
import YoutubeContainer from './youtube/youtube_container';

const Root = ({store}) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <Route path="/" component={App}>
          {/* <Route path='/home' component={HomePage} /> */}
        </Route>
      </HashRouter>
    </Provider>
  )
}

export default Root;