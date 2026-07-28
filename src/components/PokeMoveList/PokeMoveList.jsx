import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: var(--light-color);
  width: 100%;
  height: 100%;
  max-width: 325px;
  max-height: 400px;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  max-height: 100%;
  padding-top: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 8px;
    cursor: grab;
  }
`;

const StyledListItem = styled.li`
  text-align: center;
  color: white;
  border-radius: 20px;
  background-color: var(--accent-color);
  padding: 1px 30px;
  font-family: var(--font-2);
  font-size: clamp(20px, 1.5vw, 50px);
`;
const StyledListName = styled.h2`
  font-family: var(--font-3);
  font-size: clamp(15px, 2.5vw, 40px);
`;

export const PokeMoveList = ({ list, propertyName, listName }) => {
  return (
    <StyledContainer>
      <StyledListName>{listName}:</StyledListName>
      <StyledList>
        {list?.map((item) => (
          <StyledListItem key={item.id}>
            {item[propertyName].name}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
};
