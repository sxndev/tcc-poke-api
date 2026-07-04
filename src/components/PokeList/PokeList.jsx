import { useState, useEffect } from "react";

export const PokeList = () => {
  const [pokeList, setPokelist] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      const response = await fetch(url);
      const json = await response.json();

      const pokemons = await Promise.all(
        json.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        })
      );

      setPokelist(pokemons);
    }
    getPokemon();
  }, []);

  useEffect(() => {
    console.log(pokeList);
  }, [pokeList]);

  return (
    <div>
      {pokeList.map((pokemon, index) => (
        <div key={index}>
          <h3>Nome: {pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt="imagem do pokemon" />
        </div>
      ))}
    </div>
  );
};