import { useEffect, useState } from "react";
import { CHART, Date, DATEBOX1, FRAME2, LINEITEM11, LISTITEMS, OverlapGroup1, PROFILEICON, PTS, Scrollbar1, Scroller, UPCOMINGFIXTURES, UPCOMINGFIXTURESV2, USER1, USER11, VS, VSUsers1 } from '@/styles/Homepage.styled'
export default function ThisWeeksFixtures({fixtures, loading}){


     if(loading){
        return(
            <h1>Loading...</h1>
        )
     }

    return (
    <UPCOMINGFIXTURESV2>
    <OverlapGroup1>
      <UPCOMINGFIXTURES>
        This Week's Fixtures
      </UPCOMINGFIXTURES>
    </OverlapGroup1>
    <CHART>
      <LISTITEMS>
        {fixtures.map((fixture, index) => (
            <LINEITEM11 key = {index}>
            <DATEBOX1>
                <Date>
                    GW 
                    <br /> {fixture.event}
                </Date>
            </DATEBOX1>
            <VSUsers1>
                <USER1>
                    <PROFILEICON>
                    </PROFILEICON>
                    <USER11>{fixture.league_entry_1}</USER11>
                    <FRAME2>
                        <PTS>{fixture.league_entry_1_points}</PTS>
                    </FRAME2>
                </USER1>
                <VS> VS </VS>
                <USER1>
                    <PROFILEICON>
                    </PROFILEICON>
                    <USER11>{fixture.league_entry_2}</USER11>
                    <FRAME2>
                        <PTS>{fixture.league_entry_2_points}</PTS>
                    </FRAME2>
                </USER1>
            </VSUsers1>
        </LINEITEM11>
        ))}
      </LISTITEMS>
      <Scrollbar1>
        <Scroller></Scroller>
      </Scrollbar1>
    </CHART>
  </UPCOMINGFIXTURESV2>
)

}


