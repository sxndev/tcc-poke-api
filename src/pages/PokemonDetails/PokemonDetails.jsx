import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getPokemonByData } from "../../services/api";
import { BigPokeCard } from "../../components/BigPokeCard/BigPokecard";

const StyledContainer = styled.section`
  display:flex;
  height:100vh;
  width:100vw;
  justify-content:center;
  padding-top:10vh;
  background-color:var(--bg-color);
`;

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

  return (
    <StyledContainer>
      <BigPokeCard
        name={pokeInfo.name}
        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeInfo.id}.png`}
        id={pokeInfo.id}
        type={pokeInfo.types?.[0]?.type?.name}
        
      />
    </StyledContainer>
  );
};
