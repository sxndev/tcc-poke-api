import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import developerImg from '../../assets/developer.jpg'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  gap: 30px;
  min-height: 100vh;
  height: 100%;
  padding: 40px;
  margin-top: 15vh;
  background: var(--bg-color);
  color: var(--light-color);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  max-width: 600px;
  background: var(--bg-color);
  padding: 30px;
  border-radius: 12px;
  border: 2px solid var(--accent-color);
  box-shadow: 0 0 20px rgba(232, 67, 59, 0.2);
`;

const Title = styled.h1`
  color: var(--light-color);
  font-size: clamp(30px, 8vw, 100px);
  font-family: var(--font-2);
`;

const Text = styled.p`
  line-height: 1.6;
  color: var(--light-color);
  margin-bottom: 15px;
  font-family: clamp(50px, 7vw, 80px);
`;

const Highlight = styled.span`
  color: var(--accent-color);
  font-weight: bold;
`;

const List = styled.ul`
  display: flex;
  flex-direction:column;
  margin-bottom: 10px;
  padding-left: 20px; 
  list-style: inherit;
`;

const ListItem = styled.li`
  postiion: relative;
`;

export const About = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Sobre o projeto</Title>
        <Card>
          <Text>
            Este projeto é o TCC de um curso de front end feito por <br />
            <Highlight>Nicolas Marcos da Silva</Highlight>
          </Text>
          <Text>
            O projeto é uma <Highlight>Pokédex web</Highlight> desenvolvida com
            React e outras Libs em conjunto consumindo dados da PokéAPI
          </Text>

          <List>
            <ListItem>Gerenciamento de estado</ListItem>

            <ListItem>
              Uso de Hooks como <Highlight> useEffect</Highlight> e
              <Highlight> useState</Highlight>
            </ListItem>
            
            <ListItem>Consumo de API</ListItem>
            <ListItem>Componentes reutilizáveis</ListItem>
            <ListItem>Rotas com <Highlight>React Router Dom </Highlight></ListItem>
            <ListItem>EStilização com Styled Components</ListItem>
          </List>

          <Text>
            O objetivo principal é colocar os conteúdos estudados no curso em
            prática, visando a eficiência no uso de
          </Text>

          <Text>
            Além disso, o projeto evolui constantemente como parte do
            aprendizado em desenvolvimento <Highlight>Front-end</Highlight>,
            reforçando lógica, estrutura e boas práticas.
          </Text>
        </Card>

      <ProfileCard
        img={developerImg} 
        name={'Nicolas Marcos da Silva'}
        role={'Full Stack Developer '}
        bio={'Apaixonado por tecnologia desde crinça'}
      />
      </Container>
    </>
  );
};
