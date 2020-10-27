import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  return (
    <div className="container" style={{ maxWidth: 500 }}>
      <form onSubmit={() => {}} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={fName}
            onChange={(e) => {
              e.preventDefault();
              setFName(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lName}
            onChange={(e) => {
              e.preventDefault();
              setLName(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <button className="pink btn lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
