import { StyledFixtureList } from "@/styles/Fixtures.styled";
import { CHART1, LINEITEM1, LISTITEMS1, OverlapGroup, STANDINGS, Title } from "@/styles/Homepage.styled";
import { useEffect, useState } from "react";
import StandingTable from "./standings-list";

export default function GetStandings() {
  const [loading, setLoading] = useState(true);
  const [standings, setStandings] = useState([]);
  const [managerDetails, setManagerDetails] = useState([]);
  

  useEffect(() => {

    const fetchManagerDetails = async () => {
      let path = "/details";
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();
      setManagerDetails(json.league_entries);
    };

    const fetchStandings = async () => {
      let path = "/standings";
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();
      updateStandingsNames(json);
      setLoading(false);
    };

    const updateStandingsNames = (json) => {
      let updatedStandings = json.map((standing) => {
        let manager = managerDetails.find(
          (manager) => manager.id === standing.league_entry
        );
        let firstName = manager ? manager.player_first_name : "";
        return {
          ...standing,
          first_name: firstName,
        };
      });
      setStandings(updatedStandings);
    };

    fetchManagerDetails();
    fetchStandings();
  
  }, [managerDetails]);


 
    return (
      <STANDINGS>
        <OverlapGroup>
          <Title>Standings</Title>
        </OverlapGroup>
        <CHART1>
          <LISTITEMS1>
            <LINEITEM1>
            <td>Rank</td>
                <td>Manager</td>
                <td>W</td>
                <td>D</td>
                <td>L</td>
                <td>+</td>
                <td>PTS</td>
            </LINEITEM1>
            {standings.map((fixture, index) => (
              <LINEITEM1 key = {index}>
                <td>{fixture.rank}</td>
                <td>{fixture.first_name}</td>
                <td>{fixture.matches_won}</td>
                <td>{fixture.matches_drawn}</td>
                <td>{fixture.matches_lost}</td>
                <td>{fixture.points_for}</td>
                <td>{fixture.total}</td>
              </LINEITEM1>
            ))}
          </LISTITEMS1>
        </CHART1>
      </STANDINGS>
    );
 

}
