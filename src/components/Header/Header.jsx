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
  position: fixed;
  width: 100%;
  height: 15vh;
  border-bottom: solid 5px var(--light-color);
  top: 0;
  z-index: 100;

  .logo {
    display: flex;
    align-items: center;
    gap: 5px;
    & h1 {
      font-size: clamp(12px, 3vw, 50px);
    }
  }

  nav ul {
    display: flex;
    gap: 10px;
  }

  img {
    min-width: 20px;
    width: 5vw;
    max-width: 40px;
    object-fit: contain;
  }

  li { 
    position: relative;
  }
  li:hover::before{
    width:100%;
    left:0%;
  }

  li::before {
    content: ""; 
    position:absolute;
    z-index:-10;
    left:50%;
    bottom:-2px;  
    height: 5px; 
    border-radius:20px; 
    background-color: white;
    width: 0%;
    transition: 
      width ease 0.5s, 
      left ease 0.5s;
  }
`;

export const Header = () => {
  // esboço do header, ainda não está pronto
  return (
    <StyledHeader>
      <div className="logo">
        <h1>TCC de Frontend</h1>
        <img src={PokeballImg} alt="Imagem da Pokebola" />
      </div>
      <nav>
        <ul>
          <li className="nav-link">
          <Link to={"/"} >
            Home
          </Link>
          </li>
          <li className="nav-link">
          <Link to={"/pokemons"} >
            Pokemons
          </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
