import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  background: white;
  background-color: var(--soft-bg-color);
  border: none;
  outline: none;
  padding: 10px 25px;
  border-radius: 10px;
  z-index: 10;
  cursor: pointer;
  color: white;
  font-size: 20px;

  &::placeholder {
    color: white;
  }
`;

const StyledButtonContainer = styled.div`
  display:flex;
  align-items:center;
  gap:10px;  
`;

const StyledClearBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 25px;
  height: 25px;
  padding: 20px;
  font-size: 20px;
  border-radius: 100%;
  font-family: var(--font-3);
  background-color: var(--accent-color);`;

const StyledDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledSearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100%;
  height: 25px;
  padding: 20px;
  font-size: 20px;
  border-radius: 10px; 
  font-family: var(--font-3);
  background-color: var(--accent-color);`;

export const Searchbar = () => {
  const [search, setSearch] = useState("");

  return (
    <StyledDiv>
      <StyledInput
        id="input-search"
        type="text"
        placeholder="Buscar um pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StyledButtonContainer>

        <StyledSearchBtn>Buscar</StyledSearchBtn>
        <StyledClearBtn id="clear-btn" onClick={() => setSearch("")}>X</StyledClearBtn>

      </StyledButtonContainer>
    </StyledDiv>
  );
};
