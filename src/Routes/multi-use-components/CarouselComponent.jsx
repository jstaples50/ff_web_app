import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const CarouselComponent = () => {
  const [announcements, setAnnouncements] = useState([
    "Poll coming soon",
    "Who is going to go #1?",
  ]);
  const [newEntry, setNewEntry] = useState("");

  const handleChange = (e) => {
    setNewEntry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnnouncements([...announcements, newEntry]);
    setNewEntry("");
  };

  const handleInputClear = () => {
    setNewEntry("");
  };

  return (
    <div>
      <h2>Carousel Component</h2>
      <Carousel>
        {announcements && announcements.map((entry) => <p>{entry}</p>)}
      </Carousel>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newEntry}
          placeholder="Enter stuff here"
          onChange={handleChange}
          onClick={handleInputClear}
        />
        <button disabled={newEntry === ""}>Submit</button>
      </form>
    </div>
  );
};

export default CarouselComponent;
