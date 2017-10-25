import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import '../style/style.css';
import '../style/userAuth.css';

const UserAuth = () => {
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
                                User
                        </p>
                    </i>} 
                    id="bg-nested-dropdown">
                <MenuItem eventKey="2">Account Settings</MenuItem>
                <MenuItem eventKey="1">Logout</MenuItem>
            </DropdownButton>
        </div>
    );
}

export default UserAuth;