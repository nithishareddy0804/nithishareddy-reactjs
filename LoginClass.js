import React from "react";

class LoginClass extends React.Component {
  constructor() {
    super();
    this.state = {
      EmailText: "",
      password: "",
      errorMsg: "",
    };
  }
  handleEmail = (event) => {
    this.setState({
      EmailText: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { EmailText, password } = this.state;
    if (EmailText === "" || password === "") {
      this.setState({
        errorMsg: "please provide both fields",
      });
    }else if(EmailText!='admin@gmail.com' && password!='admin'){
        this.setState({
            errorMsg: "please provide the correct email and password",
          });
    } else {
      this.setState({
        errorMsg: `email:${EmailText} and password:${password}`,
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="EmailText">Email address</label>
            <input
              type="email"
              className="form-control"
              id="EmailText"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.EmailText}
              onChange={this.handleEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <button type="submit" className="btn btn-primary btn">
            Login
          </button>
          {this.state.errorMsg && <h1>{this.state.errorMsg}</h1>}
        </form>
      </div>
    );
  }
}

export default LoginClass;
