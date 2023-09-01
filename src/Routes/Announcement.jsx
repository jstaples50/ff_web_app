import React from "react";
import CarouselComponent from "./multi-use-components/CarouselComponent";
import TeamComment from "./announce-components/TeamComment";

const Announcement = () => {
  return (
    <div>
      <h1>Announcement Component</h1>
      <CarouselComponent />
      <TeamComment />
    </div>
  );
};

export default Announcement;
