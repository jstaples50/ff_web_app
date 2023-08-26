import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Routes/NavBar";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Announcement from "./Routes/Announcement";
import Profile from "./Routes/Profile";

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
