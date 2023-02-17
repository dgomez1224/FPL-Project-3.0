import styled, { css } from "styled-components";

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ValignTextBottom = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Navigation = css`
  font-family: PremierLeague;
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  font-weight: 700;
  font-style: normal;
`;

export const DateV2 = css`
  font-family: PremierLeague;
  font-size: var(--font-size-l);
  letter-spacing: 0;
  font-weight: 700;
  font-style: normal;
`;

export const Body = css`
  font-family: PremierLeague;
  font-size: var(--font-size-m);
  letter-spacing: 0;
  font-weight: 700;
  font-style: normal;
`;

export const InterBoldBlack12px = css`
  color: var(--black);
  font-family: PremierLeague;
  font-size: var(--font-size-m);
  font-weight: 700;
  font-style: normal;
`;

export const TOPBANNER = styled.div`
  height: 80px;
  display: flex;
  padding: 0 20px;
  align-items: flex-end;
  justify-content: space-between;
  min-width: 1368px;
  background-color: var(--silver-sand);
`;

export const OverlapGroup = styled.div`
  height: 60px;
  align-self: center;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 205px;
  background-color: var(--white);
`;

export const Title = styled.h1`
  min-width: 175px;
  font-family: PremierLeague;
  font-weight: 900;
  color: var(--silver-sand);
  font-size: var(--font-size-xxl);
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

export const NAVIGATIONBAR = styled.div`
  ${Navigation}
  height: 30px;
  margin-left: 469px;
  margin-bottom: 10px;
  display: flex;
  padding: 2px 96px;
  justify-content: space-evenly;
  align-items: flex-start;
  min-width: 542px;
  gap: 100px;
  background-color: var(--white);
`;

export const HISTORY = styled.div`
  position: relative;
  font-weight: 700;
  color: var(--silver-sand);
  line-height: 24px;
  white-space: nowrap;
`;

export const MANAGERS = styled.div`
  position: relative;
  font-weight: 700;
  color: var(--silver-sand);
  line-height: 24px;
  white-space: nowrap;
`;

export const Ellipse1 = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 53px;
  margin-bottom: 10px;
  background-color: var(--white);
  border-radius: 15px;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1328px;
  gap: 21px;
  padding-top: 30px;
  padding-left: 20px;
`;

export const FlexCol = styled.div`
  width: 654px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 680px;
  gap: 30px;
`;

export const UPCOMINGFIXTURESV2 = styled.div`
  width: 654px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 270px;
  background-color: var(--silver-sand);
  border-radius: 30px;
`;

export const OverlapGroup1 = styled.div`
  height: 50px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  min-width: 654px;
  background-color: var(--white);
  border-radius: 30px 30px 0px 0px;
`;

export const UPCOMINGFIXTURES = styled.div`
  ${ValignTextBottom}
  ${Navigation}
    height: 24px;
  min-width: 258px;
  font-weight: 700;
  color: var(--silver-sand);
  line-height: 24px;
  white-space: nowrap;
`;

export const CHART = styled.div`
  width: 654px;
  height: 220px;
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 0px 0px 30px 30px;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const LISTITEMS = styled.div`
  display: flex;
  position: relative;
  margin-bottom: -80px;
  flex-direction: column;
  width: 624px;
  height: 300px;
  align-items: flex-start;
  background-color: var(--white);
`;

export const STANDINGS = styled.div`
  width: 654px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 380px;
  background-color: var(--silver-sand);
  border-radius: 30px;
`;

export const STANDINGS1 = styled.div`
  ${Navigation}
  min-width: 142px;
  font-weight: 700;
  color: var(--silver-sand);
  line-height: 24px;
  white-space: nowrap;
`;

export const CHART1 = styled.div`
  width: 654px;
  height: 330px;
  position: relative;
  display: flex;
  align-items: flex-start;
  border-radius: 0px 0px 30px 30px;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const LISTITEMS1 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 624px;
  height: 320px;
  align-items: flex-start;
  gap: 30px;
  padding: 30px 0px;
  background-color: var(--silver-sand);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export const LINEITEM1 = styled.div`
  font-family: PremierLeague;
  position: relative;
  min-width: 624px;
  height: 30px;
  background-color: var(--alto);
  display: flex;
  justify-content: space-evenly;
`;

export const LINEITEM5 = styled.div`
  position: relative;
  min-width: 624px;
  height: 30px;
  margin-bottom: -10px;
  background-color: var(--alto);
`;

export const OverlapGroup11 = styled.div`
  position: absolute;
  width: 652px;
  height: 680px;
  top: 0;
  left: 1px;
  background-color: var(--silver-sand);
  border-radius: 30px;
`;

export const BracketRectangle = styled.div`
  position: absolute;
  width: 652px;
  height: 680px;
  top: 0;
  left: 1px;
  background-color: var(--silver-sand);
  border-radius: 30px;
`;

export const OverlapGroup2 = styled.div`
  position: absolute;
  height: 50px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 21px;
  align-items: center;
  min-width: 652px;
  background-color: var(--white);
  border-radius: 30px 30px 0px 0px;
`;

export const BRACKET = styled.div`
  ${Navigation}
  width: 188px;
  min-height: 18px;
  font-weight: 700px;
  color: var(--silver-sand);
  line-height: 24px;
  white-space: nowrap;
`;

export const LINEITEM11 = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  gap: 12.5px;
  position: relative;
  align-self: stretch;
  background-color: var(--alto);
`;

export const DATEBOX1 = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

export const Date = styled.div`
  ${DateV2}
  position:relative;
  width: fit-content;
  font-weight: 700;
  color: var(--black);
  text-align: center;
  line-height: 20px;
`;

export const VSUsers1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 50px;
  position: relative;
  justify-content: space-between;
`;

export const VS = styled.div`
  ${Body}
  position: relative;
  width: fit-content;
  font-weight: 700;
  color: var(--black);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

export const USER1 = styled.div`
  display: flex;
  wifth: fit-content;
  align-items: center;
  gap: 15px;
  position: relative &.user.user-2 {
    padding: 5px 20px 5px 0px;
  }
`;

export const PROFILEICON = styled.div`
  position: relative;
  min-width: 40px;
  height: 40px;
  background-color: var(--white);
  border-radius: 20px;
  border: 2px solid;
  border-color: var(--eerie-black);
`;

export const USER11 = styled.div`
  ${ValignTextMiddle}
  ${Body}
    position: relative;
  width: fit-content;
  font-weight: 700;
  color: var(--eerie-black);
  text-align: center;
  line-height: 18px;
  white-space: nowrap;
`;

export const FRAME2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 10px;
  position: relative;
  background-color: var(--alto);
`;
export const PTS = styled.div`
  ${Body}
  ${ValignTextMiddle}
    position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export const Scrollbar = styled.div`
  height: 300px;
  margin-bottom: -80px;
  display: flex;
  padding: 8px, 5px;
  align-items: flex-start;
  min-width: 30px;
  background-color: var(--eerie-black);

  &.scrollbar.scrollbar-1 {
    height: 560px;
    align-self: flex-end;
    margin-botttom: -230px;
  }
`;

export const Scroller = styled.div`
    width: 20px;
    height: 50px;
    background-color: var(--alto);
    border-radius: 30px'
`;

export const Scroller1 = styled.div`
  .scrollbar.scrollbar-1 & {
    height: 54px;
  }
`;

export const Scrollbar1 = styled.div`
  height: 300px;
  margin-bottom: -80px;
  display: flex;
  padding: 8px, 5px;
  align-items: flex-start;
  min-width: 30px;
  background-color: var(--eerie-black);
`;


export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
`;