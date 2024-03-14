import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/LogInPage.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
/* import video from '../assets/video-intr.mp4' */

const API_URL = import.meta.env.VITE_API_URL

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_URL}/auth/login`, { email, password })
      .then((response) => {
        const successDescription = "The user has been logged in!"
        setSuccessMessage(successDescription);
        setErrorMessage(undefined);
        storeToken(response.data.authToken);

      return authenticateUser();
      })
     .then(() => { navigate('/dashboard') })
      .catch((error) => {
        const errorDescription = error.response.data.errorMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
       {/*  <video className='video' autoPlay loop muted>
       <source src={video} type='video/mp4' />
       </video> */}

        <div className="login-formcontainer">
          <label className='label2'>
            Email
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="setEmail"
              type="email"
            />
          </label>

          <label className='label2'>
            Password
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="setPassword"
              type="password"
            />
          </label>

          <div className='btn-box-signup'>
            <button className='login-button' type="submit">Log In!</button>
            <Link to="/signup">
              <button className='signup-button' type="button">Don't Have an Account - Sign up!</button>
            </Link>

          </div>
        </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default LogInPage;
