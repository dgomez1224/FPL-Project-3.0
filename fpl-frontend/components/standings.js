import { StyledFixtureList } from "@/styles/Fixtures.styled";
import { useEffect, useState } from "react";
import StandingTable from "./standings-list";

export default function GetStandings() {
  const [loading, setLoading] = useState(true);
  const [standings, setStandings] = useState([]);
  const [managerDetails, setManagerDetails] = useState([])

  


  
  useEffect(() => {
   
    const updateStandingsNames = (arr1, arr2) => {
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i].league_entry === arr2[j].id) {
            arr1[i]["first_name"] = arr2[j].player_first_name;
          }
        }
      }
      setStandings(arr1);
    }
  
    const findManagerDetails = async() => {
      let path = "/details";
      setLoading(true);

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();
      setManagerDetails(json.league_entries)
    }

    const fetchStandings = async() => {
      let path = "/standings";
      setLoading(true);
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();
      setStandings(json);
      updateStandingsNames(standings, managerDetails)
      setLoading(false);
    }

    findManagerDetails()
    fetchStandings()
    console.log("standings", standings)
    console.log("manager details", managerDetails)
    
  }, [])

  return (
    <>
    <h1>Standings</h1>
    <div>
    <StandingTable standings={standings} loading={loading} />
  </div>
  </>
  );
}
