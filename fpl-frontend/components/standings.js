import { StyledFixtureList } from "@/styles/Fixtures.styled";
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
      <>
        <h1>Standings</h1>
        <div>
          <StandingTable standings={standings}  loading={loading}/>
        </div>
      </>
    );
 

}
