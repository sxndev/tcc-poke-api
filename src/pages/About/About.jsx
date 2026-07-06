import styled from "styled-components";
import { Header } from "../../components/Header/Header";

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
  background: var(--bg-color);
  color: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  max-width: 600px;
  background: var(--soft-bg-color);
  padding: 30px;
  border-radius: 12px;
  border: 2px solid var(--accent-color);
  box-shadow: 0 0 20px rgba(232, 67, 59, 0.2);
`;

const Title = styled.h1`
  color: var(--accent-color);
  margin-bottom: 20px;
`;

const Text = styled.p`
  line-height: 1.6;
  color: var(--soft-color);
  margin-bottom: 15px;
`;

const Highlight = styled.span`
  color: var(--light-color);
  font-weight: bold;
`;

export const About = () => {
  return (
    <>
    <Header/>
    <Container>
      <Card>
        <Title>Sobre o projeto</Title>

        <Text>
          Este projeto é uma <Highlight>Pokédex web</Highlight> desenvolvida com
          React, consumindo dados da PokéAPI e aplicando conceitos modernos do
          ecossistema JavaScript.
        </Text>

        <Text>
          O objetivo principal é praticar <Highlight>componentização</Highlight>,
          consumo de APIs, <Highlight>hooks</Highlight> como useState e useEffect,
          e organização de interfaces com Styled Components.
        </Text>

        <Text>
          Durante o desenvolvimento, foram explorados conceitos como
          <Highlight>paginação</Highlight>, manipulação de estado e criação de
          rotas com React Router DOM.
        </Text>

        <Text>
          Além disso, o projeto evolui constantemente como parte do aprendizado em
          desenvolvimento front-end, reforçando lógica, estrutura e boas práticas.
        </Text>
      </Card>
    </Container>
    </>
  );
};