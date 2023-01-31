import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "primary":
      return "#03a9f3";
    case "danger":
      return "#f56342";
    default:
      return "#fff";
  }
};

export const StyledFixtureList = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;

  thead {
    background-color: purple;
    th {
      color: white;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
  }

  tbody {
    tr {
      color: black;
      td {
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
`;

export const StyledTableRow = styled.tr`
  background-color: ${props => 
    props.result === 'win' 
    ? 'green'
    : props.result === 'draw' 
    ? 'gray'
    : props.result === 'loss' 
    ? 'red'
    : 'white'};
  color: black;
`;

export const StyledStandingsRow = styled.tr`
    background-color: white;
    color: black'
`