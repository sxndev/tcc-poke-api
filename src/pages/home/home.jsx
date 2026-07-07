import { Header } from "../../components/Header/Header";
// import { PokeList } from "../../components/pokeList/pokeList";
import styled from "styled-components";
import PokeballImg from "../../assets/pokeball.png";
import "../../css/animation.css";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  background-color: var(--bg-color);
  color: var(--light-color);
  height: 90vh;
  text-align: center;
  position: relative;
  width: 100%;
  top:10vh;

  h1 {
    font-size: clamp(30px, 6vw, 100px);
    z-index: ;
    padding: 30px;
    border-radius: 30px;
  }

  h1 span {
    color: var(--electric-type);
    font-style: italic;
  }
`;

const StyledPokeballImg = styled.img`
  width: 50px;
  position: absolute;
  z-index: 0;
  top:20%;
  right:20%;

  &.animate-pokeball:nth-child(3) {
    top: 80%;
    left: 40%;
    animation-duration: 8s;
  }

  &.animate-pokeball:nth-child(4) {
    top: 85%;
    right: 12%;
    animation-duration: 11s;
    animation-delay: -3s;
    transform: scaleX(-1);
  }

  &.animate-pokeball:nth-child(5) {
    top: 55%;
    left: 5%;
    animation-duration: 9s;
    animation-delay: -6s;
    transform: scaleX(-1);
  }

  &.animate-pokeball:nth-child(6) {
    top: 80%;
    right: 80%;
    animation-duration: 13s;
    animation-delay: -2s;
  }

  &.animate-pokeball:nth-child(7) {
    top: 28%;
    left: 20%;
    animation-duration: 10s;
    animation-delay: -5s;
  }

  &.animate-pokeball:nth-child(8) {
    top: 35%;
    right: 35%;
    animation-duration: 12s;
    animation-delay: -8s;
    transform: scaleX(-1);
  }

  &.animate-pokeball:nth-child(9) {
    top: 20%;
    left: 5%;
    animation-duration: 7s;
    animation-delay: -1s;
  }

  &.animate-pokeball:nth-child(10) {
    top: 40%; 
    left: 35%;
    animation-duration: 7s;
    animation-delay: -1s;
  }
  &.animate-pokeball:nth-child(11) {
    top: 50%;
    left: 75%;
    animation-duration: 7s;
    animation-delay: -1s;
  }
  &.animate-pokeball:nth-child(12) {
    top: 20%;
    left: 90%;
    animation-duration: 7s;
    animation-delay: -1s;
  }
`;
const MainSection = () => {
  return (
    <StyledMain>
        <h1>
          React & Libs <br /> + <br /> <span>PokeAPI</span>
        </h1>

      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
      <StyledPokeballImg
        src={PokeballImg}
        alt="Imagem de uma Pokebola"
        className="animate-pokeball"
      />
    </StyledMain>
  );
};

export const Home = () => {
  return (
    <>
      <Header />
      <MainSection />
    </>
  );
};
