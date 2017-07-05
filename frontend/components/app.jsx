import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = (props) => {
  return (
    <div className='app'>
      <NavBarContainer />
      { props.children }
    </div>
  )
}

export default App;
