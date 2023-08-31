// api call functions here
import axios from "axios";

export const getLeagueData = async (leagueYear) => {
  let data = "";
  await axios
    .get(`https://api.sleeper.app/v1/league/${leagueYear}/users`)
    .then((response) => {
      data = response.data;
      //   console.log(data);
    })
    .catch((err) => console.error(err));

  return data;
};

export const getRosterData = async (leagueYear) => {
  let data = "";
  await axios
    .get(`https://api.sleeper.app/v1/league/${leagueYear}/rosters`)
    .then((response) => {
      data = response.data;
      // console.log(data);
    })
    .catch((err) => console.error(err));

  return data;
};

export const getMatchupData = async (leagueYear) => {
  let data = "";
  await axios
    .get(`https://api.sleeper.app/v1/league/${leagueYear}/matchups/1`)
    .then((response) => {
      data = response.data;
      // console.log(data);
    })
    .catch((err) => console.error(err));

  return data;
};
