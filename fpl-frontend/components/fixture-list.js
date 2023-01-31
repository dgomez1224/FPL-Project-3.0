import { StyledFixtureList, StyledTableRow } from "@/styles/Fixtures.styled";

export default function FixtureList({fixtures, loading}) {
    

    if(loading){
        return (
            <h1>Loading...</h1>
        )
    }
   
  return (
    <StyledFixtureList>
      <thead>
        <tr>
          <th>Gameweek</th>
          <th>Team One Name</th>
          <th>Team One Points</th>
          <th>Team Two Points</th>
          <th>Team Two Name</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody >
        {fixtures.map((fixture, index) => (
            
          <StyledTableRow key= {index} result= {fixture.result}>
            <td>{fixture.gameweek}</td>
            <td>{fixture.team_one}</td>
            <td>{fixture.team_one_points}</td>
            <td>{fixture.team_two_points}</td>
            <td>{fixture.team_two}</td>
            <td>{fixture.result}</td>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledFixtureList>
  );
}
