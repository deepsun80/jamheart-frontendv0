import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import HomePage from './home_page';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import YoutubeContainer from './youtube/youtube_container';

const Root = ({store}) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={App}>
          {/* <Route path='/home' component={HomePage} /> */}
          <Route path='/youtube' component={YoutubeContainer} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
