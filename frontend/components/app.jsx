import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = (props) => {
  return (
    <div className='app'>
      <NavBarContainer />
      <div className='flexbox'>
        <SidebarContainer />
        { props.children }
      </div>
    </div>
  )
}

export default App;
