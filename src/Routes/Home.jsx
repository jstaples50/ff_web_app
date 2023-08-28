import React, { useEffect, useState } from "react";
import Carousel from "./multi-use-components/Carousel";
import Matchups from "./home-components/Matchups";
import Rankings from "./home-components/Rankings";
import TicketDisplay from "./home-components/TicketDisplay";

const Home = ({ managers, matchups }) => {
  return (
    <div>
      <h1>Home Component</h1>
      <Carousel />
      <Matchups managers={managers} matchups={matchups} />
      <Rankings />
      <TicketDisplay />
    </div>
  );
};

export default Home;
