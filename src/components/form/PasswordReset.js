import React from 'react';
import { Field, reduxForm } from 'redux-form';

import '../../style/style.css';
import '../../style/passwordReset.css';

const validate = values => {
  const errors = {}
    if (!values.email) {
        errors.email = 'Please enter your email address.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input {...input} type={type} placeholder={label} className="passwordField"/>
      {touched && (<div style={{ color:'#f57261', fontSize: 14 }}>{error}</div>)}
    </div>
)

const PasswordReset = (props) => {
    const { handleSubmit } = props;

    return (
        <div className="passwordReset">
            <h2 style={{ fontSize: 32, fontWeight: 700 }}>Password Reset</h2>
            <div className="paragraph">
                Enter your <span style={{ fontWeight:700 }}>email address </span> 
                that you used to register. We'll send you an email with your 
                username and a link to reset your password.
            </div>
            <form onSubmit={ handleSubmit }>
              <Field
                name="email"
                component={renderField}
                type="email"
                label="Email Address"
                />          
              <button type="submit" className="passwordResetButton">Send</button>
            </form>
            <div style={{ fontSize: 14 }}>
                If you still need help, <a href="#"> contact us</a>
            </div>
        </div>
    );
}

export default reduxForm ({
  form: 'passwordReset',
  validate
})(PasswordReset)