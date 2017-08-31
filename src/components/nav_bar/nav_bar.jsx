import React from 'react';
import $ from "jquery";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleDashClick = this.handleDashClick.bind(this);
  }

  handleDashClick(e) {
    this.props.setComponentActive("dashboard")
    BrowserRouter.push("/dashboard")
  }

  componentWillReceiveProps(newProps) {
    if(this.props.activeComponent !== newProps.activeComponent) {
      if(newProps.activeComponent === "dashboard") {
        this.resetButtons();
        this.dashboardActive();
      }
    }
  }

  dashboardActive() {
    $('.dashboardButton i').css('background-color', '#3fc66e');
    $('.dashboardButton i').css('border-color', '#3fc66e');
    $('.dashboardButton i').css('color', 'white');
    $('.dashboardButton').css('border-color', '#3fc66e');
  }

  resetButtons() {
    $('.navBarButton i').css('background-color', '#d3d3d3')
    $('.navBarButton i').css('border-color', 'black');
    $('.navBarButton i').css('color', 'black');
    $('.navBarButton').css('border-color', 'black');
  }

  render() {
    return (
      <div className='navBar'>
        <div className='leftNav' />
        <div className='headerNav'>
          JAMTRACK
        </div>
        <div className='rightNav'>
          {/* <Link to='/dashboard' className='navBarLink dashboardButton'>
            <i className="fa fa-tachometer" aria-hidden="true"></i>
            Dashboard
          </Link> */}
          <button className='navBarButton dashboardButton' onClick={this.handleDashClick}>
            <i className="fa fa-tachometer" aria-hidden="true"></i>
            Dashboard
          </button>
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
