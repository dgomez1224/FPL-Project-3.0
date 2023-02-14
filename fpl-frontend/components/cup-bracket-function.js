import { EmbedContainer, EmbedIframe, StyledDropdown } from "@/styles/Bracket.styled";
import { useEffect, useState } from "react";

export default function CupBracket() {
  const options = ["Select Season", "2021/22", "2022/23"];
  const [season, setSeason] = useState("Select Season");

  const handleChange = (event) => {
    setSeason(event.target.value);
  };

  return (
    <>
      <StyledDropdown>
        <select value={season} onChange={handleChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </StyledDropdown>
      {season === "2021/22" && (
        <EmbedContainer>
          <EmbedIframe
            src="https://brackethq.com/b/i1kz/embed/"
            frameborder="0"
          ></EmbedIframe>
        </EmbedContainer>
      )}
      {season === "2022/23" && (
        <EmbedContainer>
          <EmbedIframe
            src="https://brackethq.com/b/pcq4/embed/"
            frameborder="0"
          ></EmbedIframe>
        </EmbedContainer>
      )}
    </>
  );
}

