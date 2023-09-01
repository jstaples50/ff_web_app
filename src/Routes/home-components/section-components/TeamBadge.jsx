import React from "react";

import { Link } from "react-router-dom";

import styles from "../../../css/styles.css";

const TeamBadge = ({ team }) => {
  const teamBadgeStyle = {
    color: "blue",
  };

  return (
    <div>
      {team && (
        <Link to={`profile/${team.userId}`}>
          <p key={team.userId} style={teamBadgeStyle}>
            {team.teamName}: {team.userName}
          </p>
        </Link>
      )}
    </div>
  );
};

export default TeamBadge;
