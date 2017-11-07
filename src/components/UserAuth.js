import React, {Component} from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import axios from 'axios';

import '../style/style.css';
import '../style/userAuth.css';

class UserAuth extends Component {
    constructor(){
        super();
        this.state = {
            userName: 'TestUser'
        }
    }

    loadUserFromServer = () => {
        axios.get('http://localhost:8000/session')
            .then(res => {
                // this.setState({ userName: res.data.email });
                console.log(res.data);
            })
            .catch(err => {
                console.log('Error: Could not access user');
            });
    }

    componentDidMount() {
        this.loadUserFromServer();
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
                    <MenuItem eventKey="1">Logout</MenuItem>
                </DropdownButton>
            </div>
        );
    }
}

export default UserAuth;