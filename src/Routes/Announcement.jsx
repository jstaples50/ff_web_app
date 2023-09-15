import React from "react";
import CarouselComponent from "./multi-use-components/CarouselComponent";
import CommentChat from "./announce-components/CommentChat";

const Announcement = () => {
  return (
    <div>
      <CarouselComponent />
      <CommentChat />
    </div>
  );
};

export default Announcement;
