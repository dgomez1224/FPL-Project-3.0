import {
  StyledFixtureList,
  StyledStandingsRow,
  StyledTableRow,
} from "@/styles/Fixtures.styled";

export default function StandingTable({ standings, loading }) {

  if (loading) {
    return <h1>Loading...</h1>;
  }
  else{
    return (
      <>
        <StyledFixtureList>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>+</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((fixture, index) => (
              <StyledStandingsRow key={index}>
                <td>{fixture.rank}</td>
                <td>{fixture.first_name}</td>
                <td>{fixture.matches_won}</td>
                <td>{fixture.matches_drawn}</td>
                <td>{fixture.matches_lost}</td>
                <td>{fixture.points_for}</td>
                <td>{fixture.total}</td>
              </StyledStandingsRow>
            ))}
          </tbody>
        </StyledFixtureList>
      </>
    );
  }
  
}
