import { StyledFixtureList } from "@/styles/Fixtures.styled";
import { useEffect, useState } from "react";
import StandingTable from "./standings-list";

export default function GetStandings() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [standings, setStandings] = useState([]);

  const handleClick = async () => {
    let path = "/fixtures";
    setLoading(true);

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
    const json = await res.json();
    setFixtures(json);
    setStandings(sortTeams(fixtures));
    console.log(standings);
    setLoading(false);
  };

  function sortTeams(json) {
    const teams = {};

    json.forEach((match) => {
      const teamOnePoints = teams[match.team_one] || {
        name: match.team_one,
        points: 0,
        pointsFor: 0,
        wins: 0,
        draws: 0,
        losses: 0,
      };
      const teamTwoPoints = teams[match.team_two] || {
        name: match.team_two,
        points: 0,
        pointsFor: 0,
        wins: 0,
        draws: 0,
        losses: 0,
      };
      if (match.completed === true) {
        if (match.team_one_points > match.team_two_points) {
          teamOnePoints.points += 3;
          teamOnePoints.wins += 1;
          teamTwoPoints.losses += 1;
        } else if (match.team_one_points < match.team_two_points) {
          teamTwoPoints.points += 3;
          teamTwoPoints.wins += 1;
          teamOnePoints.losses += 1;
        } else {
          teamOnePoints.points += 1;
          teamTwoPoints.points += 1;
          teamOnePoints.draws += 1;
          teamTwoPoints.draws += 1;
        }

        teamOnePoints.pointsFor += match.team_one_points;
        teamTwoPoints.pointsFor += match.team_two_points;

        teams[match.team_one] = teamOnePoints;
        teams[match.team_two] = teamTwoPoints;
      }
    });

    const teamList = Object.values(teams);

    teamList.sort((a, b) => {
      if (a.points === b.points) {
        return b.pointsFor - a.pointsFor;
      }
      return b.points - a.points;
    });
    return teamList;
  }

  // useEffect(() => {

  // }, []);
  return (
    <>
    <button type="button" onClick={handleClick}>
      Standings
    </button>
    <div>
    <StandingTable standings={standings} loading={loading} />
  </div>
  </>
  );
}
