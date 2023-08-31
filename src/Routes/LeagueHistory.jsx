import React from "react";
import HistoryColumn from "./league-history-components/HistoryColumn";

const LeagueHistory = () => {
  return (
    <div>
      <h1>League History Component</h1>
      <h2>League History</h2>
      <div>
        <HistoryColumn />
        <HistoryColumn />
      </div>
    </div>
  );
};

export default LeagueHistory;
