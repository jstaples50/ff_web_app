export const pointSystemData = [
  {
    title: "Passing",
    info: [
      "Passing Yards: 1pt per 25yds",
      "Passing TD: 4pts",
      "2pt Conversion: 2pts",
      "Pass Intercepted: -1",
    ],
  },
  {
    title: "Rushing",
    info: [
      "Rushing Yards: 1pt per 10yds",
      "Rushing TD: 6pts",
      "2pt Conversion: 2pts",
    ],
  },
  {
    title: "Receiving",
    info: [
      "Reception: 0.5pts",
      "Receiving Yards: 1pt per 10yds",
      "Receiving TD: 6pts",
      "2pt Conversion: 2pts",
    ],
  },
  {
    title: "Kicking",
    info: [
      "FG Made:",
      "0-19yds: 3pts",
      "20-29yds: 3pts",
      "30-39yds: 3pts",
      "40-49yds: 4pts",
      "50+yds: 5pts",
      "PAT Made: 1pt",
      "FG Missed: -1pt",
      "PAT Missed: -1pt",
    ],
  },
  {
    title: "Team Defense",
    info: [
      "Defense TD: 6pts",
      "Points Allowed:",
      "0: 10pts",
      "1-6: 7pts",
      "7-13: 4pts",
      "21-27: 0pts",
      "28-34: -1pts",
      "35+: -4pts",
      "Sack: 1pt",
      "Interception: 2pts",
      "Fumble Recovery: 2pts",
      "Safety: 2pts",
      "Forced Fumble: 1pt",
      "Blocked Kick: 2pts",
    ],
  },
  {
    title: "Special Teams/Special Teams Player",
    info: [
      "Special Teams TD: 6pts",
      "Special Teams Forced Fumble: 1pt",
      "Special Teams Forced Fumble Recovery: 1pt",
    ],
  },
  {
    title: "Miscellaneous",
    info: ["Fumble: -1pts", "Fumble Lost: -2pts", "Fumble Recovery TD: 6pts"],
  },
];

export const ticketData = [
  {
    name: "Best Team on the Week",
    category: "weekly",
    ticketValue: 3,
  },
  {
    name: "Worst Team on the Week",
    category: "weekly",
    ticketValue: 2,
  },
  {
    name: "Most Efficient Manager of the Week",
    category: "weekly",
    ticketValue: 2,
  },
  {
    name: "Least Efficient Manager of the Week",
    category: "weekly",
    ticketValue: 0.5,
  },
  {
    name: "Overachiever",
    category: "weekly",
    ticketValue: 1,
  },
  {
    name: "Biggest Blowout",
    category: "weekly",
    ticketValue: 1,
  },
  {
    name: "Player of the Week",
    category: "weekly",
    ticketValue: 1,
    position: [
      "Running Back",
      "Wide Reciever",
      "Quarterback",
      "Tight End",
      "Kicker",
      "Defense",
    ],
  },
  {
    name: "Benchwarmer of the Week",
    category: "weekly",
    ticketValue: 0.5,
    position: [
      "Running Back",
      "Wide Reciever",
      "Quarterback",
      "Tight End",
      "Kicker",
      "Defense",
    ],
  },
  {
    name: "Highest Points in Loss",
    category: "weekly",
    ticketValue: 0.5,
  },
  {
    name: "Champion",
    category: "season",
    ticketValue: 15,
  },
  {
    name: "Loser, You Piece of Shit!",
    category: "season",
    ticketValue: 8,
  },
  {
    name: "Best Position Player of the Season",
    category: "season",
    ticketValue: 7,
    position: [
      "Running Back",
      "Wide Reciever",
      "Quarterback",
      "Tight End",
      "Kicker",
      "Defense",
    ],
  },
  {
    name: "Most 'Best Team of the Week' in the Season",
    category: "season",
    ticketValue: 6,
  },
  {
    name: "2nd Place",
    category: "season",
    ticketValue: 6,
  },
  {
    name: "Olympian (get more than 3 individual awards in a week)",
    category: "season",
    ticketValue: 6,
  },
  {
    name: "3rd Place",
    category: "season",
    ticketValue: 5,
  },
  {
    name: "Juggernaut (claim best team of the week & be the least efficient manager)",
    category: "season",
    ticketValue: 5,
  },
  {
    name: "Most 'Worst Team of the Week' in the Season",
    category: "season",
    ticketValue: 4,
  },
  {
    name: "Best I Got (most efficient manager and highest points in a loss)",
    category: "season",
    ticketValue: 4,
  },
  {
    name: "Never A Chump (never been worst team in a season)",
    category: "season",
    ticketValue: 5,
  },
];
