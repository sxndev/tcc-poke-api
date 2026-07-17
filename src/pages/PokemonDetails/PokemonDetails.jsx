import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPokemonByData } from "../../services/api";
// import { BigPokeCard } from "../../components/BigPokeCard/BigPokecard";


export const PokeDetails = () => {
  const [pokeInfo, setPokeInfo] = useState({});

  const { pokedata } = useParams();

  useEffect(() => {
    async function getInfo(data) {
      const response = await getPokemonByData(data);
      await setPokeInfo(response);

      return;
    }
    getInfo(pokedata);
  }, [pokedata]);

  useEffect(() => {
    console.log(pokeInfo);
  }, [pokeInfo]);
  return (
    <>
    <h3>
      pokemon encontrado {pokeInfo.name} 
    </h3> 
    {/* <img src={pokeInfo.sprites.other["official-artwork"].front.default} alt="" /> */}
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="" />

    </>
);
};
