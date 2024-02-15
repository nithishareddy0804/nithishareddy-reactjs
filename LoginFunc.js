import React, { useState } from "react";

function LoginFunc() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmailText, setEmailText] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const [Gender, setGender] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (EmailText === "" || password === ""|| FirstName==="" ||LastName==="") {
      seterrorMsg("please provide all fields");
    } else {
      seterrorMsg(`email:${EmailText} and password:${password}`);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="form-group">
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="FirstName"
            placeholder="Enter first name"
            value={FirstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="LastName"
            placeholder="Enter last name"
            value={LastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="radio"
            id="male"
            name="Gender"
            value="male"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />{" "}
          <label htmlFor="male">male</label>
          <input
            type="radio"
            id="female"
            name="Gender"
            value="female"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
          <label htmlFor="female">female</label>
        </div>
        <div className="form-group">
          <label htmlFor="EmailText">Email address</label>
          <input
            type="email"
            className="form-control"
            id="EmailText"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={EmailText}
            onChange={(event) => {
              setEmailText(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="agreeTerms">
            <input type="checkbox" id="agreeTerms" />
            Agree terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn">
          Login
        </button>
        {errorMsg && <h1>{errorMsg}</h1>}
      </form>
    </div>
  );
}

export default LoginFunc;
