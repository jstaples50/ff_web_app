import React from "react";
import Carousel from "./multi-use-components/Carousel";
import TeamComment from "./announce-components/TeamComment";

const Announcement = () => {
  return (
    <div>
      <h1>Announcement Component</h1>
      <Carousel />
      <TeamComment />
    </div>
  );
};

export default Announcement;
