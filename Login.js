import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [EmailTxt, setEmailTxt] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const Navigate = useNavigate("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (EmailTxt === "" || Password === "") {
      seterrorMsg("please provide all fields");
    } else {
      seterrorMsg("");
       Navigate("/");
    }
  };
  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="EmailTxt"
            name="email"
            value={EmailTxt}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(event) => {
              setEmailTxt(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
            value={Password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {errorMsg && <h1>{errorMsg}</h1>}
      </form>
    </div>
  );
};
export default Login;
