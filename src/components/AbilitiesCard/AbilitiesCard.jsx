import styled from "styled-components";

const StyledAbilitieList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;
  flex-direction: column;
  max-width:100%;
  max-height:100%;
`;

const StyledListItem = styled.li`
    font-weight:bold;
    color: var(--light-color);
    background-color:${({type}) => `var(--${type}-type)`};
    color: var(--light-color);
    padding:0px 10px ;
    border-radius:5px;
`;

export const AbilitiesCard = ({ abilities, type }) => {
  return (
    <StyledAbilitieList>
        <h2>Abilities:</h2>
      {abilities?.map((a) => (
        <StyledListItem key={a?.ability?.name} type={type}>
          {a?.ability?.name}
        </StyledListItem>
      ))}
    </StyledAbilitieList>
  );
};
