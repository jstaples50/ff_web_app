import React from "react";
import CarouselComponent from "./multi-use-components/CarouselComponent";
import CommentChat from "./announce-components/CommentChat";

const Announcement = () => {
  return (
    <div>
      <h1>Announcement Component</h1>
      <CarouselComponent />
      <CommentChat />
    </div>
  );
};

export default Announcement;
