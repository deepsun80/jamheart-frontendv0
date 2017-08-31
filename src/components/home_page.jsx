import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='homePageContainer'>
        <div className='headerHomePage'>
          <h1 className='headerTitle'>JamHeart</h1>
          <Link to='/login' className='homePageButton loginButton'>Login</Link>
          <Link to='/signup' className='homePageButton signupButton'>Sign up</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
