import React from 'react';
import { Field, reduxForm } from 'redux-form';

import '../../style/style.css';
import '../../style/login.css';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Please enter your JamHeart email address.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Please enter your password'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input {...input} type={type} placeholder={label} className="loginField"/>
      {touched && (<div style={{ color:'#f57261', fontSize: 14 }}>{error}</div>)}
    </div>
)

const LoginForm = (props) => {
    const { handleSubmit } = props;

    return (
        <div className="loginForm">
          <i className="fa fa-music fa-3x" aria-hidden="true"></i>
          <h4 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>JamHeart</h4>
          
          <form onSubmit={ handleSubmit }>
            <div>
              <Field
                name="email" 
                component={renderField} 
                type="email" 
                label="Email Address"
                />
            </div>
            <div>
              <Field
                name="password" 
                component={renderField} 
                type="password" 
                label="Password"
                />
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


export default reduxForm ({
  form: 'login',
  validate,
})(LoginForm)
