import { useState, useEffect } from "react";
import { getPokemonlist } from "../../services/api";
import { PokeCard } from "../PokeCard/PokeCard";
import { Button } from "../Button/Button";
import styled from "styled-components";


const StyledPokeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  padding: 20px;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--bg-color);
  text-align: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 15vh;

  #title {
    color: var(--light-color);
    font-size: clamp(25px, 5vw, 50px);
  }
`;

export const PokeList = () => {
  const [pokeList, setPokelist] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function firstLoad() {
      const pokemons = await getPokemonlist(0);
      setPokelist(pokemons);
      setOffset(10);
    }
    firstLoad();
  }, []);

  async function getMorePokemons() {
    const newPokemons = await getPokemonlist(offset);
    setOffset((prev) => prev + 10);
    setPokelist((prev) => [...prev, ...newPokemons]);
    console.log(pokeList);
  }

  return (
    <StyledSection>
      <h2 id="title">Lista de Pokemons</h2>
      <StyledPokeList>
        {pokeList.map((poke) => (
          <li key={poke.id}>
            <PokeCard
              key={poke.id}
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
              name={poke.name}
              type={poke.types[0].type.name}
              id={poke.id}
            />
          </li>
        ))}
        </StyledPokeList>
      <Button text={"Buscar mais Pokemons"} onClick={getMorePokemons} />
    </StyledSection>
  );
};
