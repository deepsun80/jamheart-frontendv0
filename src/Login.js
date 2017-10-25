import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';

class Login extends Component {
    render() {
        return(
            <Form horizontal style={{ width: '80%', margin: 'auto' }}>
                <FormGroup controlId="formHorizontalEmail">
                    Email
                    <FormControl type="email" placeholder="Email" />
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    Password
                    <FormControl type="password" placeholder="Password" />
                </FormGroup>

                <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                </Col>
                </FormGroup>

                <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type="submit">
                    Sign in
                    </Button>
                </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;