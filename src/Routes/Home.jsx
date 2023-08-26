import React from "react";
import Carousel from "./multi-use-components/Carousel";
import Matchups from "./home-components/Matchups";
import Rankings from "./home-components/Rankings";
import TicketDisplay from "./home-components/TicketDisplay";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <Carousel />
      <Matchups />
      <Rankings />
      <TicketDisplay />
    </div>
  );
};

export default Home;
