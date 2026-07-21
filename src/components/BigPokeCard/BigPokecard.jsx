import styled from "styled-components";
import pokeballImg from "../../assets/pokeball.png";

const StyledBigCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 50vh;
  max-width: 40vw;
  color: var(--soft-bg-color);
  position: relative;
  border-radius: 20px 20px 0px 0px;

  img {
    border-radius: 20px 20px 0px 0px;
    padding: 30px; 
    width: 100%;
    object-fit:contain;
    height: 100%;
    max-height:400px;
    background-color: ${({ type }) => `var(--${type}-type)`};
  }

  #id {
    font-family: var(--font-2);
    font-size: 40px;
    position: absolute;
    top: 20px;
    right: 30px;
    color:white;
  }
`;

const StyledPokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow:10px 10px 10px;
  background-color:white; 
  height:100px;
  border-radius:0px 0px 20px 20px;

  #name{
    font-family:var(--font-2);
    font-size:clamp(30px,3vw, 40px);   
    letter-spacing:3px;
  }
`;


export const BigPokeCard = ({ img, name, type, id }) => {
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
          <h2 id="name">{name}</h2>
          <h3 id="type">{type}</h3>
          <p id="id">id:{id}</p>
        </StyledPokeInfo>

      </StyledBigCard>
  );
};
