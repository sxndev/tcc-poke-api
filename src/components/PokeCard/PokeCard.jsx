import styled from "styled-components";

const StyledPokeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height:280px;
  height: 100%;
  color: var(--light-color);
  border-radius: 20px;
  position: relative; 
  background-color: var(--light-color); 
  text-align: center;
  transition:
    border ease-in-out 0.3s,
    box-shadow ease-in-out 0.3s,
    transform ease-in-out 0.3s;

  cursor: pointer;

  .poke-info {
    background-color: ${({ type }) => `var(--${type}-type)`};
    color: var(--light-color);
    height:100%;
  }
  
  img {
    padding:20px;
    width: 100%;  
    height: 70%;
    object-fit: contain;
    transition: transform ease-in-out 0.5s;
  }

  .poke-info{
    width:100%;  
    height:30%;
    border-radius:0px 0px 20px 20px; 
  }
  h2 {
    text-transform: uppercase;
    font-family: "Bebas Neue","Segoe UI", sans serif;
      font-size:clamp(16px,5vw, 40px);
      letter-spacing:3px;
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
    color:var(--soft-color); 
  }


  &:hover {
    transform: translateY(-5px);
    }
  }
`;

export const PokeCard = ({ name, img, type, id }) => {
  return (
    <StyledPokeCard type={type}>
      <img src={img} alt={`Imagem do ${name}`} />
      <div className={`poke-info ` } >
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>ID:{id}</p>
      </div>
    </StyledPokeCard>
  );
};
