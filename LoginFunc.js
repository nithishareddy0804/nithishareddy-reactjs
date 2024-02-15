import{ useState } from "react";

function LoginFunc(){
    const [EmailText,setEmailText]=useState("");
    const [password,setPassword]=useState("");
    const [errorMsg,seterrorMsg]=useState("");
   const handleSubmit=(event)=>{
      event.preventDefault();
      if (EmailText === "" || password === ""){
      seterrorMsg("please provide both fields");
      }else if(EmailText!=='admin@gmail.com' && password!=='admin'){
          seterrorMsg("please provide valid email and password");
      } else {
        seterrorMsg(`email:${EmailText} and password:${password}`);
      }
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="EmailText">Email address</label>
            <input
              type="email"
              className="form-control"
              id="EmailText"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={EmailText}
              onChange={(event)=>{
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
              onChange={(event)=>{
                setPassword(event.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary btn">
            Login
          </button>
          {errorMsg && <h1>{errorMsg}</h1>}
        </form>
      </div>
    )
}

export default LoginFunc;