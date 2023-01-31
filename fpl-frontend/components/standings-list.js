import { StyledFixtureList, StyledStandingsRow, StyledTableRow } from "@/styles/Fixtures.styled";

export default function StandingTable({standings, loading}) {
    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
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
                  <td>{index + 1 }</td>
                  <td>{fixture.name}</td>
                  <td>{fixture.wins}</td>
                  <td>{fixture.draws}</td>
                  <td>{fixture.losses}</td>
                  <td>{fixture.pointsFor}</td>
                  <td>{fixture.points}</td>
                </StyledStandingsRow>
              ))}
            </tbody>
          </StyledFixtureList>
        </>
      );
}