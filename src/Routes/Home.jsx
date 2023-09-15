import React, { useEffect, useState } from "react";
import CarouselComponent from "./multi-use-components/CarouselComponent";
import Matchups from "./home-components/Matchups";
import Rankings from "./home-components/Rankings";
import TicketDisplay from "./home-components/TicketDisplay";

import { colors } from "../theme";

import { Box } from "@mui/material";

const Home = ({ managers, setRankingNums }) => {
  return (
    <div>
      <CarouselComponent />
      <Matchups managers={managers} />
      <Box
        bgcolor={colors.primary}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <h3>Rankings</h3>
        <Rankings managers={managers} setRankingNums={setRankingNums} />
      </Box>
    </div>
  );
};

export default Home;
