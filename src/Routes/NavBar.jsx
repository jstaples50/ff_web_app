import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { colors } from "../theme";

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
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          to={"/ff_web_app"}
          style={{ textDecoration: "none", color: colors.confirm }}
        >
          <li key={"home"} style={{ margin: "4px" }}>
            Home
          </li>
        </Link>
        <Link
          to={"/login"}
          style={{ textDecoration: "none", color: colors.confirm }}
        >
          <li key={"login"} style={{ margin: "4px" }}>
            Login
          </li>
        </Link>
        <Link
          to={"/announcement"}
          style={{ textDecoration: "none", color: colors.confirm }}
        >
          <li key={"announcement"} style={{ margin: "4px" }}>
            Announcement
          </li>
        </Link>
        <Link
          to={currentManager ? `/profile/${currentManager.userId}` : "/profile"}
          style={{ textDecoration: "none", color: colors.confirm }}
        >
          <li
            key={"profile"}
            onClick={handleCheckChange}
            style={{ margin: "4px" }}
          >
            Profile
          </li>
        </Link>
        <Link
          to={"/pointsystem"}
          style={{ textDecoration: "none", color: colors.confirm }}
        >
          <li key={"pointsystem"} style={{ margin: "4px" }}>
            Point System
          </li>
        </Link>
        <Link
          to={"/leaguehistory"}
          style={{ textDecoration: "none", color: colors.confirm }}
        >
          <li key={"leaguehistory"} style={{ margin: "4px" }}>
            League History
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
