import React, { useState, useEffect } from "react";

import { setCurrentManagerInLocalStorage } from "../../lib/helper-functions/localStorage";

const LoginEntry = ({ managers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSelectedTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedManager = managers.filter(
      (manager) => manager.teamName === selectedTeam
    )[0];
    if (password === selectedManager.password) {
      setIsLoggedIn(true);
      setCurrentManagerInLocalStorage(selectedManager);
    } else {
      setIsLoggedIn(false);
    }

    setSelectedTeam("");
    setPassword("");
  };

  return (
    <div>
      <h2>LoginEntry Component</h2>
      <h3>Welcome, Syndicate</h3>
      <h3>Login</h3>
      {managers && (
        <form onSubmit={handleSubmit}>
          <select value={selectedTeam} onChange={handleSelectedTeamChange}>
            <option value="" disabled selected hidden>
              Select Team
            </option>
            {managers.map((manager) => (
              <option value={manager.teamName}>{manager.teamName}</option>
            ))}
          </select>
          <p>Selected Team: {selectedTeam}</p>
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={handlePasswordChange}
          />
          <button disabled={selectedTeam === "" || password === ""}>
            Submit
          </button>
          {isLoggedIn ? <p>Logged In</p> : <p>Not Logged In</p>}
        </form>
      )}
    </div>
  );
};

export default LoginEntry;
