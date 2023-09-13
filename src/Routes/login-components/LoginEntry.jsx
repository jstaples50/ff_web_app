import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import { setCurrentManagerInLocalStorage } from "../../lib/helper-functions/localStorage";
import { colors } from "../../theme";

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
    if (selectedTeam && password === selectedManager.password) {
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
      <Box
        className="login-titles"
        height={"18vh"}
        width={"100vw"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <h2>Welcome, Syndicate</h2>
        <h3>Login</h3>
      </Box>
      <Box
        className="login-input-fields"
        height={"30vh"}
        width={"100vw"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {managers && (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <select
              value={selectedTeam}
              onChange={handleSelectedTeamChange}
              style={{
                margin: "10px",
                textAlign: "center",
                width: "200px",
                height: "40px",
                background: colors.primary,
              }}
            >
              <option value="" disabled selected hidden>
                Select Team
              </option>
              {managers.map((manager) => (
                <option value={manager.teamName}>{manager.teamName}</option>
              ))}
            </select>
            {/* css properties for changing password placeholder is in index.css */}
            <input
              className="password-input"
              type="text"
              value={password}
              placeholder="password"
              style={{
                margin: "10px",
                textAlign: "center",
                width: "200px",
                height: "40px",
                background: colors.primary,
              }}
              disabled={selectedTeam === ""}
              onChange={handlePasswordChange}
            />
            <button
              className="login-button"
              disabled={selectedTeam === "" || password === ""}
              style={{
                background: colors.confirm,
                width: "100px",
                height: "45px",
                borderRadius: "10px",
              }}
            >
              Login
            </button>
            <p>Selected Team: {selectedTeam}</p>
            {isLoggedIn ? <p>Logged In</p> : <p>Not Logged In</p>}
          </form>
        )}
      </Box>
    </div>
  );
};

export default LoginEntry;
