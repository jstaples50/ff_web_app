// api call functions here
import axios from "axios";

export const getMatchupData = async (fn) => {
  await axios
    .get("https://api.sleeper.app/v1/league/992218285527326720/matchups/1")
    .then((response) => {
      const data = response.data;
      fn(data);
      // console.log(data);
    });
};
