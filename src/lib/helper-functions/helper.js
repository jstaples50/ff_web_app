// helper functions here
import axios from "axios";

// Function to check if a manager is facing another manager for the week

// TODO: This function is based on the assumption that the roster id is the same in matchups as it is in the managers objects. They are not

export const matchupArray = (matchups, managers) => {
  const matchupArrayIds = [];
  for (let i = 0; i < 5; i++) {
    let indvidualMatchup = [];
    matchups.forEach((team) => {
      if (team.matchup_id === i + 1) {
        const foundTeam = managers.find(
          (element) => element.rosterId === team.roster_id
        );
        // console.log(foundTeam);
        indvidualMatchup.push(foundTeam);
      }
    });
    matchupArrayIds.push(indvidualMatchup);
  }
  // console.log(matchupArrayIds);
  // console.log(managers);

  return matchupArrayIds;
};

// ATTEMPT 3

// export const createMatchupArray = async (managers, fn) => {
//   let matchupData = "";

//   const getMatchupData = async () => {
//     await axios
//       .get("https://api.sleeper.app/v1/league/992218285527326720/matchups/1")
//       .then((response) => {
//         matchupData = response.data;
//       });
//   };

//   await getMatchupData();

//   const matchupArray = [];
//   for (let i = 0; i < 5; i++) {
//     let indvidualMatchup = [];
//     matchupData.forEach((team) => {
//       if (team.matchup_id === i + 1) {
//         const foundTeam = managers.find(
//           (element) => element.rosterId === team.roster_id
//         );
//         // console.log(foundTeam);
//         indvidualMatchup.push(foundTeam);
//       }
//     });
//     matchupArray.push(indvidualMatchup);
//   }
//   // console.log(matchupArray);
//   fn(matchupArray);
// };

// Attempt to combine manager object and matchup info

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
        // Checks to see if data is being retrieved
        // console.log("League Data Call Check");
        // console.log(userData);
      });
  };

  const getRosterData = async () => {
    await axios
      .get(`https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_2022}/rosters`)
      .then((response) => {
        rosterData = response.data;
        // console.log("Roster Data Call Check");
        // console.log(rosterData);
      });
  };

  const getMatchupData = async () => {
    await axios
      .get(
        `https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_2022}/matchups/1`
      )
      .then((response) => {
        matchupData = response.data;
      });
  };

  await getLeagueData();
  await getRosterData();
  await getMatchupData();

  const rosterInfoArray = rosterData.map((manager) => ({
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

  // This forEach loop decides the construction of the manager object.
  // Additions to manager object occur here

  rosterInfoArray.forEach((manager) => {
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

  console.log(rosterInfoArray);
  fn(rosterInfoArray);
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
