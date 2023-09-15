import React from "react";
import { Box } from "@mui/material";

const Ticket = ({ ticketObj }) => {
  return (
    <Box
      className="ticket-container"
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      width={"700px"}
      height={"50px"}
    >
      <h4 style={{ marginRight: "10px" }}>{ticketObj.name}</h4>
      <p>Tickets: {ticketObj.ticketValue}</p>
    </Box>
  );
};

export default Ticket;
