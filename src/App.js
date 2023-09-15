import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./Routes/NavBar";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Announcement from "./Routes/Announcement";
import Profile from "./Routes/Profile";
import LeagueHistory from "./Routes/LeagueHistory";
import PointSystem from "./Routes/PointSystem";

import { createManagerObjects } from "./lib/helper-functions/helper";
import {
  SLEEPER_LEAGUE_2021,
  SLEEPER_LEAGUE_2022,
  SLEEPER_LEAGUE_2023,
} from "./apis/manager-database/managerDatabase";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline } from "@mui/material";

function App() {
  const [managers, setManagers] = useState([]);
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);

  useEffect(() => {
    createManagerObjects(setManagers, SLEEPER_LEAGUE_2023);
    // console.log(managers);
  }, []);

  const handleNavClick = () => {
    !isNavDisplayed ? setIsNavDisplayed(true) : setIsNavDisplayed(false);
  };

  return (
    <div className="App">
      <h1>The Syndicate</h1>
      <Router>
        <CssBaseline />
        <IconButton onClick={handleNavClick}>
          <MenuIcon />
        </IconButton>
        {isNavDisplayed && <NavBar />}
        <Routes>
          <Route
            path="/ff_web_app"
            element={managers ? <Home managers={managers} /> : null}
          />
          <Route
            path="/login"
            element={managers ? <Login managers={managers} /> : null}
          />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/pointsystem" element={<PointSystem />} />
          <Route path="/leaguehistory" element={<LeagueHistory />} />
          <Route
            path="/profile/:userId"
            element={managers ? <Profile managers={managers} /> : null}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
