import React, { useState, useEffect } from 'react';
import '../style/SignUpPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL

function SignUpPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
       .post(`${API_URL}/auth/signup`, { name, email, password })
      .then((response) => {

      const successDescription = "The user has been created!"
      setSuccessMessage(successDescription);
      setErrorMessage(undefined); 
      })
      .catch((error) => {
        const errorDescription = error.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="signup-container">
      <form className="signup-formcontainer" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label className='label2'>
          Name
          <input value={name} onChange={(event) => setName(event.target.value)} type="text" />
        </label>

        <label className='label2'>
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
        </label>

        <label className='label2'>
          Password
          <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
        </label>

        <div className='btn-box-signup'>
          <button className='signupbutton' type="submit">Sign Up!</button>
          <Link to="/login">
            <button className='alreadylogged-button' type="button">Already Have an Account - Log In!</button>
          </Link>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

      </form>
    </div>
  );
}

export default SignUpPage;


