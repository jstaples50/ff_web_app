import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./Routes/NavBar";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Announcement from "./Routes/Announcement";
import Profile from "./Routes/Profile";

import { createManagerObjects } from "./lib/helper-functions/helper";
import { getMatchupData } from "./apis/sleeper/apiCalls";

function App() {
  const [managers, setManagers] = useState([]);
  const [matchups, setMatchups] = useState([]);

  useEffect(() => {
    createManagerObjects(setManagers);
    getMatchupData(setMatchups);
    console.log(managers);
  }, []);

  return (
    <div className="App">
      <h1>App Component</h1>
      {/* {managers &&
        managers.map((manager) => (
          <p>
            {manager.managerName} Team Name: {manager.teamName} Roster Id:{" "}
            {manager.rosterId}
          </p>
        ))} */}
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home managers={managers} matchups={matchups} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
