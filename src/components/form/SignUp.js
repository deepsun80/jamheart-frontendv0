import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import SweetAlert from 'react-bootstrap-sweetalert';

import { push } from 'react-router-redux';

import '../../style/style.css';
import '../../style/signUp.css';

async function submitToServer(data) {
  try {
    let response = await fetch('http://www.localhost:8000/register', {
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

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      alert: null
    };
  }

  displayAlert(value) {
    const getAlert = () => (
      <SweetAlert 
        title={
          <div style={{ textAlign: 'center', margin: 'auto' }}>
              <i 
                class="fa fa-exclamation-circle" 
                aria-hidden="true" 
                style={{ color: '#f57261', marginRight: 10 }}>
              </i>
              {value}
          </div>
            } 
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
    return(
          <div className="signupForm">
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
                  className="signupField"/>
              </div>
              <div>
                <Field
                  name="password" 
                  component="input"
                  type="password" 
                  label="Password"
                  className="signupField"/>
              </div>
              <div>
                <Field
                  name="confirmPassword" 
                  component="input" 
                  type="password" 
                  label="Confirm Password"
                  className="signupField"/>
              </div>
              {/* <div>
                <Field
                  name="displayName"
                  type="text"
                  component={renderField}
                  label="Display Name (Optional)"
                  className="signupField"/>
              </div> */}
              <div style={{ color: '#818181', marginTop: 24 }}>
                  <div style={{ fontSize: 12 }}>
                      By clicking Sign Up, you agree to JamHeart’s <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>
                  </div>
                  <button type="submit" className="signupButton">Sign Up</button>
                  <div style={{ fontSize: 14 }}>
                      Already have an account? <a href="login">Sign In</a>
                  </div>
              </div>
            </form>
          </div>
    );
  }
}


export default reduxForm ({
  form: 'signup',
})(SignUp)