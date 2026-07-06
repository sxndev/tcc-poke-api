import { useState, useEffect } from "react";
import { PokeCard } from "../PokeCard/PokeCard";
import { Button } from "../Button/Button";

import styled from "styled-components";

async function getPokemon(offset) {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`;
  const response = await fetch(url);
  const json = await response.json();

  const pokemons = await Promise.all(
    json.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    }),
  );

  return pokemons;
}

export const PokeList = () => {
  const [pokeList, setPokelist] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function firstLoad() {
      const pokemons = await getPokemon(0);
      setPokelist(pokemons);
      setOffset(10);
    }
    firstLoad();
  }, []);

  async function getMorePokemons() {
    const newPokemons = await getPokemon(offset);
    setOffset((prev) => prev + 10);
    setPokelist((prev) => [...prev, ...newPokemons]);
  }

  const StyledPokeList = styled.ul`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      padding: 20px;
      gap: 30px;
  `;

  const StyledSection = styled.section`
      display:flex;
      justify-content:center;
      aligm-items:center;
      flex-direction:column;
      background-color: var(--bg-color);
      text-align:center;
      padding:30px;

      #title{
      color:var(--light-color);
      font-size:clamp(25px, 5vw, 50px);
      }

  `
  return (
    <StyledSection>
    <h2 id="title">Lista de Pokemons</h2>
      <StyledPokeList>
        {pokeList.map((poke) => (
          <li>
            <PokeCard
              key={poke.id}
              img={poke.sprites.other['official-artwork'].front_default}
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
