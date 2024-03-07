import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/LogInPage.css';

const API_URL = "http://localhost:5005/auth/login";

function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(`${API_URL}`, { email, password })
            .then((response) => {
                console.log("Logged In!", response.data);
            })
            .catch((error) => {
                console.log("Log In Error!", error);
            });
    };


    return (
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
          
            <div className="login-formcontainer">
              <label>
                Email
                <input 
                  value={email} 
                  onChange={(event) => setEmail(event.target.value)} 
                  id="setEmail" 
                  type="email" 
                />
              </label>
      
              <label>
                Password
                <input 
                  value={password} 
                  onChange={(event) => setPassword(event.target.value)} 
                  id="setPassword" 
                  type="password" 
                />
              </label>
      
              <div className="login-button-div">
                <button className='login-button' type="submit">Log In!</button>
              </div>
      
              <div className="signupbutton-div">
                <Link to="/signup">
                            <button className='signup-button' type="button">Don't Have an Account - Sign up!</button>
                </Link>

              </div>
              </div>
              </form>
              </div>
              );

      
    
}

export default LogInPage;
