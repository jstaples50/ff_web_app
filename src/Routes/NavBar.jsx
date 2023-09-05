import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getCurrentManagerInLocalStorage } from "../lib/helper-functions/localStorage";

const NavBar = () => {
  const [currentManager, setCurrentManager] = useState(null);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCurrentManager(getCurrentManagerInLocalStorage());
  }, [check]);

  const handleCheckChange = () => {
    check ? setCheck(false) : setCheck(true);
  };

  return (
    <div>
      <h2>NavBar Component</h2>
      <ul style={{ listStyle: "none" }}>
        <Link to={"/"}>
          <li key={"home"}>Home</li>
        </Link>
        <Link to={"/login"}>
          <li key={"login"}>Login</li>
        </Link>
        <Link to={"/announcement"}>
          <li key={"announcement"}>Announcement</li>
        </Link>
        <Link
          to={currentManager ? `/profile/${currentManager.userId}` : "/profile"}
        >
          <li key={"profile"} onClick={handleCheckChange}>
            Profile
          </li>
        </Link>
        <Link to={"/pointsystem"}>
          <li key={"pointsystem"}>Point System</li>
        </Link>
        <Link to={"/leaguehistory"}>
          <li key={"leaguehistory"}>League History</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
