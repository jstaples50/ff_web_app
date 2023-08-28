import React, { useState } from "react";

const LoginEntry = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>LoginEntry Component</h2>
      <h3>Welcome, Syndicate</h3>
      <h3>Login</h3>
      <form>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={handleUsernameChange}
        />
        <p>Username Value: {username}</p>
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <p>Password Value: {password}</p>
        <button disabled={username === "" || password === ""}>Submit</button>
      </form>
    </div>
  );
};

export default LoginEntry;
