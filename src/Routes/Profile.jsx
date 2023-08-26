import React from "react";
import NavBar from "./multi-use-components/NavBar";
import TeamCard from "./profile-components/TeamCard";
import Ticket from "./multi-use-components/Ticket";

const Profile = () => {
  return (
    <div>
      <h1>Profile Component</h1>
      <NavBar />
      <TeamCard />
      <p>Tickets Earned</p>
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default Profile;
