import { useState, useEffect } from "react";
import { PokeCard } from "../PokeCard/PokeCard";
import { Button } from "../Button/Button";
import "./pokeList.css";

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

  return (
    <>
      <ul className="pokemon-list">
        {pokeList.map((poke) => (
          <PokeCard
            key={poke.id}
            img={poke.sprites.front_default}
            name={poke.name}
            type={poke.types[0].type.name}
            id={poke.id}
          />
        ))}
      </ul>
      <Button text={"Buscar mais Pokemons"} onClick={getMorePokemons} />
    </>
  );
};
