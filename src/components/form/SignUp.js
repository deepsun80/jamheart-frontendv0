import React from 'react';
import { Field, reduxForm } from 'redux-form';

import '../../style/style.css';
import '../../style/signUp.css';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Please choose a password'
  } else if (values.password.length < 6) {
      errors.password = 'Minimum 6 characters required'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input {...input} type={type} placeholder={label} className="signupField"/>
      {touched && (<div style={{ color:'#f57261', fontSize: 14 }}>{error}</div>)}
    </div>
)

const SignUp = (props) => {
    const { handleSubmit } = props;

    return (
        <div className="signupForm">
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
            <div>
              <Field
                name="displayname"
                type="text"
                component={renderField}
                label="Display Name (Optional)"
            />
            </div>
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


export default reduxForm ({
  form: 'signup',
  validate,
})(SignUp)