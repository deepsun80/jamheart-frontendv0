import React, { Component } from 'react';
import { Panel, Row, Col, Button } from 'react-bootstrap';

import UserAuth from './UserAuth';
import SideBar from './SideBar';

import '../style/style.css';

class Favorites extends Component {
    render() {
        return (
            <div>
                <Col md={2}>
                    <SideBar />
                </Col>
                <Col md={10} className="dashBoard">
                    <Row>
                        <Col>
                            <UserAuth />
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            <h1 style={{textAlign: 'center'}}>Favorites</h1>
                        </div>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default Favorites;