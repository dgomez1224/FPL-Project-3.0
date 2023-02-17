import styles from "../src/styles/layout.module.css";
import { useEffect, useState } from "react";
import {
  Ellipse1,
  FlexCol,
  FlexRow,
  HISTORY,
  MANAGERS,
  NAVIGATIONBAR,
  OverlapGroup,
  Title,
  TOPBANNER,
} from "@/styles/Homepage.styled";
import ThisWeeksFixtures from "./this-weeks-fixtures";
import GetStandings from "./standings";

export default function Layout() {
  const [fixtures, setFixtures] = useState([]);
  const [managerDetails, setManagerDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  

  console.log("fixtures:", fixtures);

  useEffect(() => {
    async function findManagerDetails() {
      let path = "/details";
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();

      setManagerDetails(json.league_entries);
    }

    findManagerDetails();
  }, []);

  useEffect(() => {
    async function fetchFixtures() {
      let path = "/fixtures";
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path);
      const json = await res.json();
      console.log("json:", json);
      replaceLeagueEntries(getUnfinishedEvents(json), managerDetails);
      console.log("loading:", loading);

      setLoading(false);

      console.log("loading:", loading);
    }

    function replaceLeagueEntries(eventsArray, entriesArray) {
      // Create a map of entry IDs to entry names
      const entryMap = new Map();
      for (let entry of entriesArray) {
        entryMap.set(entry.id, entry.player_first_name);
      }

      // Replace the league entries in the events array with entry names
      const replacedEvents = eventsArray.map((event) => {
        const entry1Name = entryMap.get(event.league_entry_1);
        const entry2Name = entryMap.get(event.league_entry_2);
        return {
          ...event,
          league_entry_1: entry1Name || event.league_entry_1,
          league_entry_2: entry2Name || event.league_entry_2,
        };
      });

      setFixtures(replacedEvents);
    }

    function getUnfinishedEvents(array) {
      const unfinishedEvents = [];
      let count = 0;

      for (let i = 0; i < array.length; i++) {
        if (!array[i].finished && count < 5) {
          unfinishedEvents.push(array[i]);
          count++;
        }
      }

      return unfinishedEvents;
    }
    fetchFixtures();
  }, [managerDetails]);

  if (fixtures.length === 0) {
    return (
      <div className="container-center-horizontal">
        <div className="homepage screen">
          <TOPBANNER>
            <OverlapGroup>
              <Title>League of Lads</Title>
            </OverlapGroup>
            <NAVIGATIONBAR>
              <HISTORY>History</HISTORY>
              <MANAGERS>Managers</MANAGERS>
            </NAVIGATIONBAR>
            <Ellipse1></Ellipse1>
          </TOPBANNER>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-center-horizontal">
        <div className="homepage screen">
          <TOPBANNER>
            <OverlapGroup>
              <Title>League of Lads</Title>
            </OverlapGroup>
            <NAVIGATIONBAR>
              <HISTORY>History</HISTORY>
              <MANAGERS>Managers</MANAGERS>
            </NAVIGATIONBAR>
            <Ellipse1></Ellipse1>
          </TOPBANNER>
          <FlexRow>
            <FlexCol>
              <ThisWeeksFixtures fixtures={fixtures} loading={loading} />
              <GetStandings />
            </FlexCol>
          </FlexRow>
        </div>
      </div>
    );
  }
}