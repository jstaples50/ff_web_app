import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box } from "@mui/material";
import { colors } from "../../theme";

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
      <Box bgcolor={colors.primary} height={"10vh"} width={"100vw"}>
        <Carousel
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: colors.confirm,
              borderRadius: "50%",
              position: "relative",
            },
          }}
          navButtonsWrapperProps={{
            // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
              bottom: "-8px",
              top: "unset",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              padding: "10px", // 1
              color: colors.darkLight, // 3
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: colors.confirm, // 2
            },
          }}
        >
          {announcements && announcements.map((entry) => <p>{entry}</p>)}
        </Carousel>
      </Box>
      <form
        className="announcement-form"
        onSubmit={handleSubmit}
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          value={newEntry}
          placeholder="Enter stuff here"
          onChange={handleChange}
          onClick={handleInputClear}
          style={{
            margin: "10px",
            textAlign: "center",
            width: "200px",
            height: "40px",
            background: colors.primary,
          }}
        />
        <button
          className="announcement-button"
          disabled={newEntry === ""}
          style={{
            background: colors.confirm,
            width: "100px",
            height: "45px",
            borderRadius: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarouselComponent;
