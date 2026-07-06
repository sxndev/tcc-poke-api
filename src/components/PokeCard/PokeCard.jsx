import styled from "styled-components";

const StyledPokeCard = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 2px white;
    width: 100%;
    height: 100%;
    color: var(--light-color);
    border-radius: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .poke-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background-color: var(--light-color);
    color: black;
    width: 100%;
  }
`;


export const PokeCard = ({ name, img, type, id }) => {
  return (
    <StyledPokeCard >
      <img src={img} alt={`Imagem do ${name}`} />
      <div className="poke-info">
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>id:{id}</p>
      </div>
    </StyledPokeCard> 
  );
};
