import React from "react";
import { Box } from "@mui/material";
import { pointSystemData, ticketData } from "../lib/pointSystemData";
import Ticket from "./multi-use-components/Ticket";

const PointSystem = () => {
  return (
    <div>
      <h2>Matchup Scoring</h2>
      <div
        className="scoring-system"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {pointSystemData.length &&
          pointSystemData.map((pointObj) => (
            <ScoringBadge pointObj={pointObj} />
          ))}
      </div>
      <h2>Lottery Ticket System</h2>
      <p>
        Here is an explanation of the lottery ticket point system for the next
        year draft
      </p>
      <h4>Weekly Tickets</h4>
      <Box
        className="weekly-tickets"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"100vw"}
      >
        {ticketData.length &&
          ticketData.map((ticketObj) =>
            ticketObj.category === "weekly" ? (
              <Ticket ticketObj={ticketObj} />
            ) : null
          )}
      </Box>
      <h4>Season Tickets</h4>
      <Box
        className="season-tickets"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"100vw"}
      >
        {ticketData.length &&
          ticketData.map((ticketObj) =>
            ticketObj.category === "season" ? (
              <Ticket ticketObj={ticketObj} />
            ) : null
          )}
      </Box>
      {/* Keep this data for league history section */}
      {/* <ul>
          <li>
            Champion: 15 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Lyujohn</span>
          </li>
          <li>
            Loser, You Piece of Shit!: 8 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: McAfee</span>
          </li>
          <li>Best Position Player of the Season (per position): 7 Tickets</li>
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>2022 Season</span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                RB-Austin Ekeler: Lyujohn
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                WR-Justin Jefferson: Fortuna
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                QB-Patrick Mahomes: McAfee
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>TE-Travis Kelce: Cal</span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>K-Brett Maher: Jared</span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                DEF-New England Patriots: Mike
              </span>
            </li>
          </ul>
          <li>
            Most 'Best Team of the Week' in the Season: 6 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Murphdawg</span>
          </li>
          <li>
            2nd Place: 6 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Jared</span>
          </li>
          <li>
            Olympian (get more than 3 indivudal awards in a week): 6 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Murphdawg</span>
          </li>
          <li>
            3rd Place: 5 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Murphdawg</span>
          </li>
          <li>
            Juggernaut (claim best team of the week & be the least efficient
            manager): 5 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Murphdawg</span>
          </li>
          <li>
            Most 'Worst Team of the Week' in the Season: 4 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Evan</span>
          </li>
          <li>
            Best I Got (most efficient manager and highest points in a loss): 4
            Tickets{" "}
            <span style={{ fontWeight: "bold" }}>
              2022 Season: Cal and Jerrod
            </span>
          </li>
          <li>
            Never A Chump (never been worst team in a season): 5 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>
              2022 Season: Jared and Fortuna
            </span>
          </li>
        </ul> */}
    </div>
  );
};

const ScoringBadge = ({ pointObj }) => {
  return (
    <Box
      className="scoring-badge"
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      flexDirection={"column"}
      width={"380px"}
    >
      <h3>{pointObj.title}</h3>
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {pointObj.info.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Box>
  );
};

export default PointSystem;
