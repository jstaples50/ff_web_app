import React from "react";
import NavBar from "./multi-use-components/NavBar";
import Carousel from "./multi-use-components/Carousel";
import TeamComment from "./announce-components/TeamComment";

const Announcement = () => {
  return (
    <div>
      <h1>Announcement Component</h1>
      <NavBar />
      <Carousel />
      <TeamComment />
    </div>
  );
};

export default Announcement;
