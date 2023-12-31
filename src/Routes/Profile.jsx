import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCurrentManagerInLocalStorage } from "../lib/helper-functions/localStorage";

import TeamCard from "./profile-components/TeamCard";
import Ticket from "./multi-use-components/Ticket";

const Profile = ({ managers }) => {
  const { userId } = useParams();
  const filteredManager = managers.filter(
    (manager) => manager.userId === userId
  )[0];

  return (
    <div>
      <TeamCard team={filteredManager} />
      <p>Tickets Earned</p>
      {/* <Ticket />
      <Ticket />
      <Ticket /> */}
    </div>
  );
};

export default Profile;
