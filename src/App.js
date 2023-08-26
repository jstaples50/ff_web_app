import "./App.css";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import Announcement from "./Routes/Announcement";
import Profile from "./Routes/Profile";

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Login />
      <Home />
      <Announcement />
      <Profile />
    </div>
  );
}

export default App;
