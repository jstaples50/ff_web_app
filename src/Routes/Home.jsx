import React, { useEffect, useState } from "react";
import CarouselComponent from "./multi-use-components/CarouselComponent";
import Matchups from "./home-components/Matchups";
import Rankings from "./home-components/Rankings";
import TicketDisplay from "./home-components/TicketDisplay";

const Home = ({ managers, setRankingNums }) => {
  return (
    <div>
      <h1>Home Component</h1>
      <CarouselComponent />
      <Matchups managers={managers} />
      <Rankings managers={managers} setRankingNums={setRankingNums} />
    </div>
  );
};

export default Home;
