import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='navBar'>
        <div className='leftNav' />
        <div className='headerNav'>
          JAMTRACK
        </div>
        <div className='rightNav'>
          <Link to='/dashboard' className='navBarLink dashboardButton'>
            <i className="fa fa-tachometer" aria-hidden="true"></i>
            Dashboard
          </Link>
          <Link to='/manage' className='navBarLink manageFeedButton'>
            <i className="fa fa-list" aria-hidden="true"></i>
            Manage Feed
          </Link>
          <Link to='/favorites' className='navBarLink favoritesButton'>
            <i className="fa fa-heart" aria-hidden="true"></i>
            Favorites
          </Link>
          <Link to='/profile' className='profileModal'>
            <img src='/assets/default_user.png' className='navBarProfilePic' />
            User
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar;
