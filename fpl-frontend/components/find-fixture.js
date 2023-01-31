import { useEffect, useState } from "react";
import FixtureList from "./fixture-list";

export default function FindFixture() {
  const [manager, setManager] = useState("");
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = [
    'All', 'Benji', 'Chris', 'David', 'Henri', 'Ian', 'Lennart', 'Matt', 'Marco', 'Max', 'Patrick'
  ]

  const [selectedOption, setSelectedOption] = useState(options[0]);

  

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setManager(event.target.value)
  };


  useEffect(() => {
    function findManagerFixtures(manager, json) {
        if(manager === "All") return json
        else{
      return json.filter(
        (game) =>
          game.team_one.toLowerCase() === manager.toLowerCase() ||
          game.team_two.toLowerCase() === manager.toLowerCase()
      );}
    }

    async function fetchFixtures(manager) {
      let path = "/fixtures";
      setLoading(true);

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();
      const fullJson = findManagerFixtures(manager, json);
      const fixturesData = updateMatchResult(fullJson, manager);

      setFixtures(fixturesData);

      setLoading(false);
    }

    function updateMatchResult(json, manager) {
      return json.map((match) => {
        if (match.completed === true) {
          if (match.team_one.toLowerCase() === manager.toLowerCase()) {
            if (match.team_one_points > match.team_two_points) {
              match.result = "win";
            } else if (match.team_one_points < match.team_two_points) {
              match.result = "loss";
            } else {
              match.result = "draw";
            }
          } else if (match.team_two.toLowerCase() === manager.toLowerCase()) {
            if (match.team_two_points > match.team_one_points) {
              match.result = "win";
            } else if (match.team_two_points < match.team_one_points) {
              match.result = "loss";
            } else {
              match.result = "draw";
            }
          }
        }
        return match;
      });
    }

    fetchFixtures(manager);
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
