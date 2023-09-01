import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import TeamCard from "./profile-components/TeamCard";
import Ticket from "./multi-use-components/Ticket";

const Profile = ({ managers }) => {
  const { userId } = useParams();
  const filteredManager = managers.filter(
    (manager) => manager.userId === userId
  )[0];

  return (
    <div>
      <h1>Profile Component</h1>
      <TeamCard team={filteredManager} />
      <p>Tickets Earned</p>
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default Profile;
