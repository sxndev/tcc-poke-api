import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import developerImg from "../../assets/developer-2.jpg";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 30px;
  min-height: 100vh;
  height: 100%;
  padding:60px;
  padding-top: 20vh; 
  background: var(--bg-color);
  color: var(--light-color);
`;

const StyledCard = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  max-width: 800px;
  background: var(--bg-color);
  padding: 30px;
  border-radius: 12px;
  border: 2px solid var(--accent-color);
  box-shadow: 0 0 20px rgba(232, 67, 59, 0.2);
`;

const StyledTitle = styled.h1`
  color: var(--light-color);
  font-size: clamp(30px, 15vw, 100px); 
  font-family: var(--font-2);
`;

const StyledText = styled.p`
  line-height: 1.6;
  color: var(--light-color);
  margin-bottom: 15px;
  font-size: clamp(15px, 1.5vw, 80px);
`;

const StyledHighlight = styled.span`
  color: var(--accent-color);
  font-weight: bold;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding-left: 20px;
  list-style: inherit;
`;

const StyledListItem = styled.li`
  postiion: relative;
`;

export const About = () => {
  return (
    <>
      <Header />
      <StyledContainer>

        <StyledTitle>Sobre o projeto</StyledTitle>
        <StyledCard>
          <StyledText>
            Este projeto é o TCC de um curso de <StyledHighlight>Front End</StyledHighlight> feito por <br />
            <StyledHighlight>Nicolas Marcos da Silva</StyledHighlight>
          </StyledText>

          <StyledText>
            O projeto é uma <StyledHighlight>Pokédex web</StyledHighlight> desenvolvida com
            React e outras Libs em conjunto consumindo dados da PokéAPI
          </StyledText>

          <StyledList>
            <StyledListItem>Gerenciamento de estado</StyledListItem>

            <StyledListItem>
              Uso de Hooks como <StyledHighlight> useEffect</StyledHighlight> e
              <StyledHighlight> useState</StyledHighlight>
            </StyledListItem>

            <StyledListItem>Consumo de API</StyledListItem>
            <StyledListItem>Componentes reutilizáveis</StyledListItem>
            <StyledListItem>
              Rotas com <StyledHighlight>React Router Dom </StyledHighlight>
            </StyledListItem>
            <StyledListItem>EStilização com Styled Components</StyledListItem>
          </StyledList>

          <StyledText>
            O objetivo principal é colocar os conteúdos estudados no curso em
            prática, visando a eficiência no uso de
          </StyledText>

          <StyledText>
            Além disso, o projeto evolui constantemente como parte do
            aprendizado em desenvolvimento <StyledHighlight>Front-end</StyledHighlight>,
            reforçando lógica, estrutura e boas práticas.
          </StyledText>
        </StyledCard>
 
      </StyledContainer>
        <ProfileCard
          img={developerImg}
          name={"Nicolas Marcos da Silva"}
          role={"Full Stack Developer "}
          bio={`
          
          Desenvolvedor Full Stack em constante evolução e apaixonado por tecnologia, com foco em Back-end. Experiência sólida com JavaScript, TypeScript, Node.js, React, Express, PostgreSQL e Prisma, Visando práticas de Clean Code, organização e escalabilidade.
          `}
          
        />
    </>
  );
};
