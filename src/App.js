import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./Routes/NavBar";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Announcement from "./Routes/Announcement";
import Profile from "./Routes/Profile";

import { createManagerObjects } from "./lib/helper-functions/helper";

function App() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    createManagerObjects(setManagers);
    // console.log(managers);
  }, []);

  return (
    <div className="App">
      <h1>App Component</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={managers ? <Home managers={managers} /> : null}
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
