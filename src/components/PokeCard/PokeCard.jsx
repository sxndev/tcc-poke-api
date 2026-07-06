import styled from "styled-components";

const StyledPokeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: solid 2px white;
  width: 100%;
  height: 100%;
  color: var(--light-color);
  border-radius: 10px;
  position: relative;
  background-color: var(--soft-bg-color);
  text-align: center;
  transition:
    border ease-in-out 0.3s,
    box-shadow ease-in-out 0.3s,
    transform ease-in-out 0.3s;

  cursor: pointer;

  img {
    padding:20px;
    width: 100%;  
    height: 70%;
    object-fit: contain;
    transition: transform ease-in-out 0.5s;
  }

  .poke-info{
    background-color:var(--light-color);
    color:black;
    width:100%;  
    height:30%;
  }
  h2 {
    text-transform: uppercase;
    font-family:
      "Segoe UI",
      sans serif;

      font-size:clamp(25px,4vw, 40px);
  }

  h3{
    font-style:italic;
  }
  p{
    position:absolute;
    right:10px;
    top:10px;
    font-weight:bold;
    font-size:clamp(20px, 1vw, 40px);
    color:white;
  }


  &:hover {
    transform: translateY(-5px);

    img {
      transform: scale(1.1);
    }
  }
`;

export const PokeCard = ({ name, img, type, id }) => {
  return (
    <StyledPokeCard>
      <img src={img} alt={`Imagem do ${name}`} />
      <div className="poke-info">
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>ID:{id}</p>
      </div>
    </StyledPokeCard>
  );
};
