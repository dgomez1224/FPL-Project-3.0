import { StyledFixtureList, StyledTableRow } from "@/styles/Fixtures.styled";


export default function FixtureList({fixtures, loading}) {
  // const findName = async (teamName) => {
  //   let path = "/details";
  //   const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
  //   const json = await res.json();
  //   for (let entry of json.league_entries) {
  //     if (entry.id === teamName) {
  //       return entry.entry_name;
  //     }
  //   }
  // };

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
            <td>{fixture.event}</td>
            <td>{fixture.team_one}</td>
            <td>{fixture.league_entry_1_points}</td>
            <td>{fixture.league_entry_2_points}</td>
            <td>{fixture.team_two}</td>
            <td>{fixture.result}</td>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledFixtureList>
  );
}
