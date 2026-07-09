import styled from "styled-components";

const StyledPokeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  max-width:250px;
  min-height:200px;
  height: 315px;
  color: var(--light-color);
  border-radius: 20px;
  position: relative; 
  background-color: var(--light-color); 
  transition:
    border ease-in-out 0.3s,
    box-shadow ease-in-out 0.3s,
    transform ease-in-out 0.3s;

  cursor: pointer;

  
  img {
    padding:20px;
    width: 100%;  
    height: 100%;
    object-fit: contain;
  }
  .poke-info {
    display:flex;
    flex-direction:column; 
    align-items:center:
    justify-content:center; 

    background-color: ${({ type }) => `var(--${type}-type)`};
    color: ${({ type }) => `var(--${type}-type-dark)`};
    height:100%;
    max-height:100%; 
    width:100%;
    text-align:center;
    border-radius:0px 0px 20px 20px; 
  }
  h2 {
    text-transform: uppercase;
    font-family: "Bebas Neue","Segoe UI", sans serif;
      font-size:clamp(30px,3vw, 40px);   
      letter-spacing:3px;
  }

  h3{
    font-style:italic;
    font-size:clamp(20px,2vw, 20px);  
    color:var(--light-color);
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
     box-shadow: 5px 10px 2px var(--soft-bg-color);
    }
  }
`;

export const PokeCard = ({ name, img, type, id }) => {
  return (
    <StyledPokeCard type={type}>
      <img src={img} alt={`Imagem do ${name}`} />
      <div className={`poke-info `}>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>ID:{id}</p>
      </div>
    </StyledPokeCard>
  );
};
