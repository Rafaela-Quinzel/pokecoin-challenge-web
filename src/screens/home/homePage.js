import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import * as S from './styled';

import { BASE_URL, axiosConfig } from '../../constants/requestConfig'
import { useRequestData } from '../../hooks/useRequestData';
import PokemonCard from '../../components/pokemonCard/pokemonCard';
import { useProtectPage } from '../../hooks/useProtectPage';


function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  useProtectPage();

  const getPokemons = useRequestData(`${BASE_URL}pokemon`, axiosConfig);

  useEffect(() => {
    if (typeof getPokemons === 'object' && Object.keys(getPokemons).length === 0) setIsLoading(true);
  }, [getPokemons]);

  return isLoading === true ? (
    <S.LoadingContainer>
      <ReactLoading type='spinningBubbles' color="#fff" />
    </S.LoadingContainer>
  ) : (
    <S.MainContainer>
      <S.CardContainer>
        {getPokemons && getPokemons?.pokemons?.map((poke) => {
          return (
            <PokemonCard
              key={poke.id}
              pokemon={poke}
            />
          )
        })}
      </S.CardContainer>
    </S.MainContainer >
  )
}

export default HomePage;