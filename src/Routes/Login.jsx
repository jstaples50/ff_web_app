import React from "react";
import LoginEntry from "./login-components/LoginEntry";
import ThirdPartyAuth from "./login-components/ThirdPartyAuth";

const Login = () => {
  return (
    <div>
      <h1>Login Component</h1>
      <LoginEntry />
      <p>-----------</p>
      <ThirdPartyAuth />
    </div>
  );
};

export default Login;
