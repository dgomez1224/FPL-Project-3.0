import { useEffect, useState } from "react";
import FixtureList from "./fixture-list";

export default function FindFixture() {
  const [manager, setManager] = useState("");
  const [managerId, setManagerId] = useState()
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [managerDetails, setManagerDetails] = useState([])
  const options = [
    "All",
    "Benji",
    "Chris",
    "David",
    "Henri",
    "Ian",
    "Lennart",
    "Matt",
    "Marco",
    "Max",
    "Patrick",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const findId = (name, arr) => {
 
    for (let entry of arr) {
      if (entry.player_first_name === name) {
         setManagerId(entry.id) ;
      }
    }
  }

  const findName = (id, arr) => {
    for (let entry of arr) {
      if (entry.id === id) {
         return entry.player_first_name ;
      }
    }
  }
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setManager(event.target.value);
    findId(event.target.value, managerDetails)
  };


  
  useEffect(() => {

    const findManagerDetails = async() => {
      let path = "/details";
      setLoading(true);

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();
      setManagerDetails(json.league_entries)
    }
    findManagerDetails()
  }, [])

  useEffect(() => {

 
  
    function findManagerFixtures(id, json) {
      if (id === "All") return json;
      else {
        return json.filter(
          (game) =>
            game.league_entry_1 === id ||
            game.league_entry_2 === id
        );
      }

    }

    async function fetchFixtures(id) {
      let path = "/fixtures";
      setLoading(true);

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();
      const fullJson = await findManagerFixtures(id, json);
      const fixturesData = await updateMatchResult(fullJson, id);
     

      setFixtures(fixturesData);

      setLoading(false);
    }

    function updateMatchResult(json, id) {

      return json.map((match) => {
        if (match.started === true) {
          if (match.league_entry_1 === id) {
            match.team_one = findName(match.league_entry_1, managerDetails);
            match.team_two = findName(match.league_entry_2, managerDetails)

            if (match.league_entry_1_points > match.league_entry_2_points) {
              match.result = "WIN";
            } else if (match.league_entry_1_points < match.league_entry_2_points) {
              match.result = "LOSS";
            } else {
              match.result = "DRAW";
            }
          } else if (match.league_entry_2 === id) {
            match.team_one = findName(match.league_entry_1, managerDetails);
            match.team_two = findName(match.league_entry_2, managerDetails)
            if (match.league_entry_2_points > match.league_entry_1_points) {
              match.result = "WIN";
            } else if (match.league_entry_2_points < match.league_entry_1_points) {
              match.result = "LOSS";
            } else {
              match.result = "DRAW";
            }
          }
        }
        return match;
      });
    }
    
    fetchFixtures(managerId);
    console.log(fixtures)

  }, [manager]);

  return (
    <>
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>
        <FixtureList fixtures={fixtures} loading={loading} />
      </div>
    </>
  );
}
