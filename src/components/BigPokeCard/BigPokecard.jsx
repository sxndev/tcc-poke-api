import styled from "styled-components";
import pokeballImg from "../../assets/pokeball.png";

const StyledBigCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ type }) => `var(--${type}-type)`};
  color: ${({ type }) => `var(--${type}-type-dark)`};
`;

const StyledPokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BigPokeCard = ({ img, name, movesList, abilities, type }) => {
  return (
    <StyledBigCard type={type}>
      <img
        src={img}
        alt={`Imagem do ${name}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = pokeballImg;
        }}
      />

      <StyledPokeInfo>
        <h2>{name}</h2>
        <ul>{movesList}</ul>
        <ul>{abilities}</ul>
      </StyledPokeInfo>
    </StyledBigCard>
  );
};
