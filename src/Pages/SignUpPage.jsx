import React, { useState, useEffect } from 'react';
import '../Styles/SignUpPage.css';
import axios from 'axios';

const API_URI = "http://localhost:5005/auth/signup";

function SignUpPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_URI}`, { name, email, password })
      .then((response) => {
        console.log("Signed Up!", response.data);

      })

    .catch ((error) => console.log("Sign Up Error!", error))


    }


return (
  <div className="signup-container">
    <form className="signup-formcontainer" onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
      

      <label>
        Name
        <input value={name} onChange={(event) => setName(event.target.value)} id="setName" type="text" />
      </label>

      <label>
        Email
        <input value={email} onChange={(event) => setEmail(event.target.value)} id="setEmail" type="email" />
      </label>

      <label>
        Password
        <input value={password} onChange={(event) => setPassword(event.target.value)} id="setPassword" type="password" />
      </label>

      <div className="signupbutton-div">
        <button className='signupbutton' type="submit">Sign Up!</button>
      </div>

    </form>
  </div>
);
}

export default SignUpPage;
