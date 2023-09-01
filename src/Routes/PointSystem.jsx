import React from "react";

const PointSystem = () => {
  return (
    <div>
      <h1>Point System Component</h1>
      <h2>Matchup Scoring</h2>
      <div className="scoring-system">
        <h3>Passing</h3>
        <ul>
          <li>Passing Yards: 1pt per 25yds</li>
          <li>Passing TD: 4pts</li>
          <li>2pt Conversion: 2pts</li>
          <li>Pass Intercepted: -1</li>
        </ul>
        <h3>Rushing</h3>
        <ul>
          <li>Rushing Yards: 1pt per 10yds</li>
          <li>Rushing TD: 6pts</li>
          <li>2pt Conversion: 2pts</li>
        </ul>
        <h3>Receiving</h3>
        <ul>
          <li>Reception: 0.5pts</li>
          <li>Receiving Yards: 1pt per 10yds</li>
          <li>Receiving TD: 6pts</li>
          <li>2pt Conversion: 2pts</li>
        </ul>
        <h3>Kicking</h3>
        <ul>
          <li>FG Made:</li>
          <ul>
            <li>0-19yds: 3pts</li>
            <li>20-29yds: 3pts</li>
            <li>30-39yds: 3pts</li>
            <li>40-49yds: 4pts</li>
            <li>50+yds: 5pts</li>
          </ul>
          <li>PAT Made: 1pt</li>
          <li>FG Missed: -1pt</li>
          <li>PAT Missed: -1pt</li>
        </ul>
        <h3>Team Defense</h3>
        <ul>
          <li>Defense TD: 6pts</li>
          <li>Points Allowed:</li>
          <ul>
            <li>0: 10pts</li>
            <li>1-6: 7pts</li>
            <li>7-13: 4pts</li>
            <li>21-27: 0pts</li>
            <li>28-34: -1pts</li>
            <li>35+: -4pts</li>
          </ul>
          <li>Sack: 1pt</li>
          <li>Interception: 2pts</li>
          <li>Fumble Recovery: 2pts</li>
          <li>Safety: 2pts</li>
          <li>Forced Fumble: 1pt</li>
          <li>Blocked Kick: 2pts</li>
        </ul>
        <h3>Special Teams/Special Teams Player</h3>
        <ul>
          <li>Special Teams TD: 6pts</li>
          <li>Special Teams Forced Fumble: 1pt</li>
          <li>Special Teams Forced Fumble Recovery: 1pt</li>
        </ul>
        <h3>Miscellaneous</h3>
        <ul>
          <li>Fumble: -1pts</li>
          <li>Fumble Lost: -2pts</li>
          <li>Fumble Recovery TD: 6pts</li>
        </ul>
      </div>
      <h2>Lottery Ticket System</h2>
      <p>
        Here is an explanation of the lottery ticket point system for the next
        year draft
      </p>
      <div className="ticket-system">
        <h4>Weekly Tickets</h4>
        <ul>
          <li>Best Team on the Week: 3 Tickets</li>
          <li>Worst Team on the Week: 2 Tickets</li>
          <li>Most Efficient Manager of the Week: 2 Tickets</li>
          <li>Least Efficient Manager of the Week: 0.5 Tickets</li>
          <li>Overachiever: 1 Ticket</li>
          <li>Biggest Blowout: 1 Ticket</li>
          <li>Player of the Week (per position): 1 Ticket</li>
          <li>Benchwarmer of the Week (per position): 0.5 Tickets</li>
          <li>Highest Points in Loss: 0.5 Tickets</li>
        </ul>
        <h4>Season Tickets</h4>
        <ul>
          <li>
            Champion: 15 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Lyujohn</span>
          </li>
          <li>
            Loser, You Piece of Shit!: 8 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: McAfee</span>
          </li>
          <li>Best Position Player of the Season (per position): 7 Tickets</li>
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>2022 Season</span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                RB-Austin Ekeler: Lyujohn
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                WR-Justin Jefferson: Fortuna
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                QB-Patrick Mahomes: McAfee
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>TE-Travis Kelce: Cal</span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>K-Brett Maher: Jared</span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                DEF-New England Patriots: Mike
              </span>
            </li>
          </ul>
          <li>
            Most 'Best Team of the Week' in the Season: 6 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Murphdawg</span>
          </li>
          <li>
            2nd Place: 6 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Jared</span>
          </li>
          <li>
            Olympian (get more than 3 indivudal awards in a week): 6 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Murphdawg</span>
          </li>
          <li>
            3rd Place: 5 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Murphdawg</span>
          </li>
          <li>
            Juggernaut (claim best team of the week & be the least efficient
            manager): 5 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Murphdawg</span>
          </li>
          <li>
            Most 'Worst Team of the Week' in the Season: 4 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>2022 Season: Evan</span>
          </li>
          <li>
            Best I Got (most efficient manager and highest points in a loss): 4
            Tickets{" "}
            <span style={{ fontWeight: "bold" }}>
              2022 Season: Cal and Jerrod
            </span>
          </li>
          <li>
            Never A Chump (never been worst team in a season): 5 Tickets{" "}
            <span style={{ fontWeight: "bold" }}>
              2022 Season: Jared and Fortuna
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PointSystem;
