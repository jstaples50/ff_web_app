// helper functions here
import axios from "axios";

// Function to retrieve data from Sleeper API and reorganize it into an array of manager objects

export const createManagerObjects = async (fn) => {
  let userData = "";
  let rosterData = "";
  let matchupData = "";

  const SLEEPER_LEAGUE_2023 = "992218285527326720";
  const SLEEPER_LEAGUE_2022 = "732814896458264576";

  const getLeagueData = async () => {
    await axios
      .get(`https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_2022}/users`)
      .then((response) => {
        userData = response.data;
        // console.log(userData);
      })
      .catch((err) => console.error(err));
  };

  const getRosterData = async () => {
    await axios
      .get(`https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_2022}/rosters`)
      .then((response) => {
        rosterData = response.data;
        // console.log(rosterData);
      })
      .catch((err) => console.error(err));
  };

  const getMatchupData = async () => {
    await axios
      .get(
        `https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_2022}/matchups/1`
      )
      .then((response) => {
        matchupData = response.data;
        // console.log(matchupData);
      })
      .catch((err) => console.error(err));
  };

  await getLeagueData();
  await getRosterData();
  await getMatchupData();

  // This map function maps out data from the rosterData GET request into manager objects

  const managerObjectsArray = rosterData.map((manager) => ({
    rosterId: manager.roster_id,
    userId: manager.owner_id,
    results: {
      wins: manager.settings.wins,
      losses: manager.settings.losses,
      ties: manager.settings.ties,
    },
    rankingPoints:
      manager.settings.wins -
      manager.settings.losses +
      manager.settings.ties / 2,
  }));

  // This forEach loop grabs the relevant data from the leagueData and matchupData GET requests and adds it to the
  // previously created manager objects

  managerObjectsArray.forEach((manager) => {
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
  });

  // console.log(managerObjectsArray);
  fn(managerObjectsArray);
};

export const filterByMatchup = (managers) => {
  const returnedArray = [];
  for (let i = 1; i < 6; i++) {
    const result = managers.filter((manager) => manager.matchupId === i);
    returnedArray.push(result);
  }
  return returnedArray;
};

export const sortByRankings = (managers) => {
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
