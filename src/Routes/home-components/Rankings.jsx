import React, { useState, useEffect } from "react";
import TeamRank from "./section-components/TeamRank";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const Rankings = ({ managers }) => {
  const columns = [
    {
      field: "ranking",
      headerName: "Rank",
    },
    {
      field: "teamName",
      headerName: "Team",
      flex: 1,
    },
    {
      field: "record",
      headerName: "Record",
      valueGetter: (params) => {
        return `${params.row.results.wins}-${params.row.results.losses}`;
      },
      flex: 1,
    },
    {
      field: "totalPoints",
      headerName: "Total Points",
      valueGetter: (params) => {
        return params.row.results.totalPoints;
      },
      flex: 1,
    },
  ];
  return (
    <Box width={"50vw"}>
      {managers && (
        <DataGrid
          getRowId={(row) => row.rosterId}
          rows={managers}
          columns={columns}
        ></DataGrid>
      )}
    </Box>
  );
};

export default Rankings;
