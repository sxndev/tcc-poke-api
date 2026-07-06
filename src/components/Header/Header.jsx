import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: var(--accent-color);
  color: var(--light-color);

  nav ul {
    display: flex;
    gap: 10px;
  }
`;
export const Header = () => {
  // esboço do header, ainda não está pronto
  return (
    <StyledHeader>
      <div className="logo">
        <h1>React + PokeApi</h1>
      </div>
      <nav>
        <ul>
          <Link to={'/'}> Home</Link>
          <Link to={'/about'}> Sobre Nós</Link>
        </ul>
      </nav>
    </StyledHeader>
  );
};
