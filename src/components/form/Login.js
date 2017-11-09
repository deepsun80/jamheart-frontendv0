import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import SweetAlert from 'react-bootstrap-sweetalert';

import { push } from 'react-router-redux';

import '../../style/style.css';
import '../../style/login.css';

async function submitToServer(data) {
  try {
    let response = await fetch('http://www.localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body: JSON.stringify(data),
      credentials : 'include',
    });
    let responseJSONUser = await response.json();
    return responseJSONUser;
  }
  catch(error) {
    console.log('Error connecting to server');
  }
}

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      alert: null
    };
  }

  displayAlert(value) {
    const getAlert = () => (
      <SweetAlert 
        title={value} 
        onConfirm={() => this.hideAlert()}>
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }  

  submit = (values) => {
    return submitToServer(values)
    .then(res => {
      if (res.message) {
        this.displayAlert(res.message);
        throw new SubmissionError();
      } else {
        console.log('success');
      }
    })
    .then(res => {
      this.props.dispatch(push('/dashboard'))
    });
  }

  render() {
    return (
        <div className="loginForm">
          <i className="fa fa-music fa-3x" aria-hidden="true"></i>
          <h4 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>JamHeart</h4>
          {this.state.alert}
          <form onSubmit={ this.props.handleSubmit(this.submit) }>
            <div>
              <Field
                name="email" 
                component="input" 
                type="email" 
                label="Email Address"
                className="loginField"/>
            </div>
            <div>
              <Field
                name="password" 
                component="input" 
                type="password" 
                label="Password"
                className="loginField"/>
            </div>
            <div className="loginCheckBox">
                <Field
                  name="remember"
                  id="remember"
                  component="input"
                  type="checkbox"
                  />
                <label htmlFor="remember" style={{ marginLeft: 8 }}>Remember Me</label>
            </div>
            <button type="submit" className="logInButton">Log In</button>
            <div style={{ fontSize: 14, color: '#818181' }}>
              <div style={{ marginBottom: 16 }}>
                <a href="password-reset">Forgot your password?</a>
              </div>
              <div>
                Don’t have an account? <a href="signup">Sign Up</a>
              </div>
            </div>
          </form>
        </div>
    );
  }
}


export default reduxForm ({
  form: 'login',
})(LoginForm)
