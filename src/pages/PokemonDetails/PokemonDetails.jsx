import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Header } from "../../components/Header/Header";
import { getPokemonByData } from "../../services/api";
import { BigPokeCard } from "../../components/BigPokeCard/BigPokecard";
import { PokeMoveList } from "../../components/PokeMoveList/PokeMoveList";

const StyledContainer = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 50px;
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  padding-top: 20vh;
  background-color: var(--bg-color);
`;

export const PokeDetails = () => {
  const [pokeInfo, setPokeInfo] = useState();

  const { pokeData } = useParams();

  useEffect(() => {
    async function getInfo(data) {
      const response = await getPokemonByData(data);
      setPokeInfo(response);

      return;
    }
    getInfo(pokeData);
  }, [pokeData]);

  return (
    <>
      <Header />
      <StyledContainer>
        <BigPokeCard
          name={pokeInfo?.name}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeInfo?.id}.png`}
          id={pokeInfo?.id}
          type={pokeInfo?.types?.[0]?.type?.name}
          abilities={pokeInfo?.abilities}
        />

        <PokeMoveList
          list={pokeInfo?.moves}
          propertyName={"move"}
          listName={"Movimentos"}
            type={pokeInfo?.types?.[0]?.type?.name}
        />
      </StyledContainer>
    </>
  );
};
