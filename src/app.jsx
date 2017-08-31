import React from 'react';
import NavBarContainer from './components/nav_bar/nav_bar_container';
import SidebarContainer from './components/sidebar/sidebar_container';
import YoutubeContainer from './components/youtube/youtube_container';
import FacebookContainer from './components/facebook/facebook_container';
import { Route, HashRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app'>
      <NavBarContainer />
      <div className='flexbox'>
        <SidebarContainer />
        { props.children }
        <Route path='/youtube' component={YoutubeContainer} />
        <Route path='/facebook' component={FacebookContainer} />
      </div>
    </div>
  )
}

export default App;
