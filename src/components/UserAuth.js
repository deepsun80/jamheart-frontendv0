import React, {Component} from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import '../style/style.css';
import '../style/userAuth.css';

import { push } from 'react-router-redux';
import { connect } from 'react-redux';

async function getFromServer() {
  try {
    let response = await fetch('http://www.localhost:8000/session', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    let responseJSONSession = await response.json();
    return responseJSONSession;
  }
  catch(error) {
    console.log('Error connecting to server');
  }
}

async function logOutUser() {
  try {
    let response = await fetch('http://www.localhost:8000/logout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    let responseLogoutSession = await response.json();
    return responseLogoutSession;
  }
  catch(error) {
    console.log('Error connecting to server');
  }
}

class UserAuth extends Component {
    constructor(){
        super();
        this.state = {
            userName: ''
        }
    }

    componentDidMount() {
        getFromServer()
        .then (res => {
            this.setState({ userName: res.email })
        });
    }

    logOut = () => {
        logOutUser()
        .then(res => {
            this.props.dispatch(push('/'))
        });
    }

    render() {
        return(
            <div className="userAuth">
                <div style={{ paddingTop: 6 }}>
                    <i class="fa fa-bell-o fa-lg" aria-hidden="true"></i>
                </div>
                <DropdownButton 
                        title={<i class="fa fa-user-circle-o fa-lg" aria-hidden="true">
                            <p style={{ 
                                fontFamily: 'Roboto', 
                                fontSize: 14, 
                                float: 'right', 
                                paddingLeft: 13 }}>
                                    {this.state.userName}
                            </p>
                        </i>} 
                        id="bg-nested-dropdown">
                    <MenuItem eventKey="2">Account Settings</MenuItem>
                    <MenuItem eventKey="1" onClick={this.logOut}>Logout</MenuItem>
                </DropdownButton>
            </div>
        );
    }
}

export default connect()(UserAuth);