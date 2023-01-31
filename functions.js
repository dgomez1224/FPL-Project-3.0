function consecutiveWins(data, name) {
  let maxWins = 0;
  let currentWins = 0;
  data.TwentyTwoSeason.forEach((gameweek) => {
    if (gameweek.Completed === true) {
      gameweek.Matches.forEach((match) => {
        if (
          match.TeamOne === name &&
          match.TeamOnePoints > match.TeamTwoPoints
        ) {
          currentWins++;
          if (currentWins > maxWins) {
            maxWins = currentWins;
          }
        } else if (
          match.TeamTwo === name &&
          match.TeamTwoPoints > match.TeamOnePoints
        ) {
          currentWins++;
          if (currentWins > maxWins) {
            maxWins = currentWins;
          }
        } else {
          currentWins = 0;
        }
      });
    }
  });
  return maxWins;
}

function headToHead(json, name) {
  let teamMatches = {};
  for (let i = 0; i < json.length; i++) {
    for (let j = 0; j < json[i].Matches.length; j++) {
      if (json.Completed === true) {
        if (
          json[i].Matches[j].TeamOne === name ||
          json[i].Matches[j].TeamTwo === name
        ) {
          let opposingTeam;
          if (json[i].Matches[j].TeamOne === name) {
            opposingTeam = json[i].Matches[j].TeamTwo;
          } else if (json[i].Matches[j].TeamTwo === name) {
            opposingTeam = json[i].Matches[j].TeamOne;
          }
          if (!teamMatches[opposingTeam]) {
            teamMatches[opposingTeam] = { wins: 0, draws: 0, losses: 0 };
          }
          if (
            json[i].Matches[j].TeamOnePoints >
              json[i].Matches[j].TeamTwoPoints &&
            json[i].Matches[j].TeamOne === name
          ) {
            teamMatches[opposingTeam].wins++;
          } else if (
            json[i].Matches[j].TeamOnePoints <
              json[i].Matches[j].TeamTwoPoints &&
            json[i].Matches[j].TeamTwo === name
          ) {
            teamMatches[opposingTeam].wins++;
          } else if (
            json[i].Matches[j].TeamOnePoints ===
            json[i].Matches[j].TeamTwoPoints
          ) {
            teamMatches[opposingTeam].draws++;
          } else {
            teamMatches[opposingTeam].losses++;
          }
        }
      }
    }
  }
  return teamMatches;
}

function countHighScores(data, name) {
  let count = 0;
  data.TwentyTwoSeason.forEach((gameweek) => {
    if (gameweek.Completed === true) {
      gameweek.Matches.forEach((match) => {
        if (match.TeamOne === name && match.TeamOnePoints > 50) {
          count++;
        } else if (match.TeamTwo === name && match.TeamTwoPoints > 50) {
          count++;
        }
      });
    }
  });
  return count;
}
