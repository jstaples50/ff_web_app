import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
        <Link to={"/profile"}>
          <li key={"profile"}>Profile</li>
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
