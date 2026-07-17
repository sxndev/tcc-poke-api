import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByData } from "../../services/api";

export const BigPokeCard = () => {
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

  return <div>O nome do pokemon ou id é {pokedata}</div>;
};
