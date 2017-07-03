import React from 'react';

const App = (props) => {
  return (
    <div className='app'>
      <h1>JamHeart</h1>
      { props.children }
    </div>
  )
}

export default App;
