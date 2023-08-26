import React from "react";
import LoginEntry from "./login-components/LoginEntry";
import ThirdPartyAuth from "./login-components/ThirdPartyAuth";
import NavBar from "./multi-use-components/NavBar";

const Login = () => {
  return (
    <div>
      <h1>Login Component</h1>
      <NavBar />
      <LoginEntry />
      <p>-----------</p>
      <ThirdPartyAuth />
    </div>
  );
};

export default Login;
