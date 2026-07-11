import { useState, useEffect } from "react";
import { PokeCard } from "../PokeCard/PokeCard";
import { Button } from "../Button/Button";
import styled from "styled-components";

// essa pokelist é um componente Statefull pois trabalha com estado (useState) e também é responsável pela comunicação com a api PokeAPI
async function getPokemon(offset) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Ocorreu um erro ao buscar os pokemons");
    }

    const json = await response.json();

    const pokemons = await Promise.all(
      json.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);

        if (!response.ok) {
          throw new Error(`Erro ao buscar ${pokemon.name}`);
        }

        return response.json();
      }),
    );

    return pokemons;
  } catch (err) {
    console.log(err);
  }
}

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
              img={poke.sprites.other["official-artwork"].front_default}
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
