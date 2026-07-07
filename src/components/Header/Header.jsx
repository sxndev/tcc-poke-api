import styled from "styled-components";
import { Link } from "react-router-dom";
import PokeballImg from "../../assets/pokeball.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: var(--accent-color);
  color: var(--light-color);
  position:fixed;
  width:100%;
  top:0;
  z-index:100;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "Bebas Neue", sans-serif;
  }

  nav ul {
    display: flex;
    gap: 10px;
  }

  img {
    width: 40px;
    object-fit: contain;
  }
`;
export const Header = () => {
  // esboço do header, ainda não está pronto
  return (
    <StyledHeader>
      <div className="logo">
        <h1>React + PokeAPI</h1>
        <img src={PokeballImg} alt="Imagem da Pokebola" />
      </div>
      <nav>
        <ul>
          <Link to={"/"}> Home</Link>
          <Link to={"/pokemons"}>Pokemons</Link>
        </ul>
      </nav>
    </StyledHeader>
  );
};
