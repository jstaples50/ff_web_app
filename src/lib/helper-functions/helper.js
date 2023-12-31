// helper functions here
import axios from "axios";
import {
  getLeagueData,
  getRosterData,
  getMatchupData,
} from "../../apis/sleeper/apiCalls";

import { setManagerCredentialsInLocalStorage } from "./localStorage";

// Function to retrieve data from Sleeper API and reorganize it into an array of manager objects

export const createManagerObjects = async (fn, leagueYear) => {
  const userData = await getLeagueData(leagueYear);
  const rosterData = await getRosterData(leagueYear);
  const matchupData = await getMatchupData(leagueYear);

  // This map function maps out data from the rosterData GET request into manager objects

  const managerObjectsArray = rosterData.map((manager) => ({
    rosterId: manager.roster_id,
    userId: manager.owner_id,
    results: {
      wins: manager.settings.wins,
      losses: manager.settings.losses,
      ties: manager.settings.ties,
      totalPoints: manager.settings.fpts,
    },
    rankingPoints:
      manager.settings.wins -
      manager.settings.losses +
      manager.settings.ties / 2,
    password: "password",
  }));

  // Sort manager array by ranking

  sortByRankings(managerObjectsArray);

  // This forEach loop grabs the relevant data from the leagueData and matchupData GET requests and adds it to the
  // previously created manager objects

  managerObjectsArray.forEach((manager, index) => {
    const foundUser = userData.find(
      (element) => element.user_id === manager.userId
    );
    const matchupId = matchupData.find(
      (element) => element.roster_id === manager.rosterId
    );

    manager.matchupId = matchupId.matchup_id;
    manager.userName = foundUser.display_name;
    manager.teamName = foundUser.metadata.team_name
      ? foundUser.metadata.team_name
      : foundUser.display_name;
    manager.ranking = index + 1;
  });

  // console.log(managerObjectsArray);

  setManagerCredentialsInLocalStorage(managerObjectsArray);
  fn(managerObjectsArray);
};

const sortByRankings = (managers) => {
  const sortedManagers = managers.sort((a, b) => {
    if (a.rankingPoints < b.rankingPoints) {
      return 1;
    }
    if (a.rankingPoints > b.rankingPoints) {
      return -1;
    }
    return 0;
  });
  return sortedManagers;
};

export const filterByMatchup = (managers) => {
  const returnedArray = [];
  for (let i = 1; i < 6; i++) {
    const result = managers.filter((manager) => manager.matchupId === i);
    returnedArray.push(result);
  }
  return returnedArray;
};
