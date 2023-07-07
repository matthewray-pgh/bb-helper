import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/Login.scss';
import '../styles/Utils.scss';

export default function Login() {
  const [validation, setValidation] = useState(null);
  const[username, setUsername] = useState(null);
  const[password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    if(username.length <= 0) {
      setValidation('username is required');
      return;
    }

    if(password.length <= 0) {
      setValidation('password is required');
      return;
    }

    setValidation('username or password is incorrect');
  }

  const handleUsernameChange = (e) => {
    if(e.target.value.length <= 0) {
      setValidation(null);
    }
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    if(e.target.value.length <= 0) {
      setValidation(null);
    }
    setPassword(e.target.value);
  }

  const handleRegisterClick = () => {
    console.log('register');
    setValidation('registration is not available at this time');
  }

  const handleForgotPasswordClick = () => {
    console.log('forgot password');
    setValidation('forgot password is not available at this time');
  }

  return (
    <section className="login-form">
      <h1>Login</h1>
      <div className="input-field">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" onChange={handleUsernameChange} />
      </div>
      
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" onChange={handlePasswordChange}/>
      </div>

      <div className="login-form__validation" style={{
        visibility: !validation ? "hidden" : "visible",
        opacity: !validation ? "0" : "1", 
        padding: !validation ? "0px" : "10px 20px",
        transition: "all .5s"
      }}>
        <div className="login-form__validation--icon">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>
        <div className="login-form__validation--message">{validation}</div>
        <div className="login-form__validation--close">
          <button className="login-form__validation--button" type="button" onClick={() => setValidation(null)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      
      <button className="button-primary" type="submit" onClick={handleSubmit}>Login</button>
      <button className="button-secondary" type="button" onClick={handleRegisterClick}>Register</button>
      <button className="button-secondary" type="button" onClick={handleForgotPasswordClick}>Forgot Password</button>

    </section>
  );
}
