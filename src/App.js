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

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [managers, setManagers] = useState([]);
  const [isNavDisplayed, setIsNavDisplayed] = useState(false);

  useEffect(() => {
    createManagerObjects(setManagers);
    // console.log(managers);
  }, []);

  const handleNavClick = () => {
    !isNavDisplayed ? setIsNavDisplayed(true) : setIsNavDisplayed(false);
  };

  return (
    <div className="App">
      <h1>App Component</h1>
      <Router>
        <IconButton onClick={handleNavClick}>
          <MenuIcon />
        </IconButton>
        {isNavDisplayed && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={managers ? <Home managers={managers} /> : null}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pointsystem" element={<PointSystem />} />
          <Route path="/leaguehistory" element={<LeagueHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
