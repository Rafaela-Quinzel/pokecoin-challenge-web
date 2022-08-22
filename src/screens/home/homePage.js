import React from 'react';
import * as S from './styled';

import { BASE_URL, axiosConfig } from '../../constants/requestConfig'
import { useRequestData } from '../../hooks/useRequestData';
import PokemonCard from '../../components/pokemonCard/pokemonCard';


function HomePage() {

  const getPokemons = useRequestData(`${BASE_URL}pokemon`, undefined, axiosConfig);

  return (
    <S.MainContainer>
      <S.CardContainer>
        {getPokemons && getPokemons.pokemons.map((poke) => {
          return (
            <PokemonCard
              key={poke.id}
              pokemon={poke}
            />
          )
        })}
      </S.CardContainer>
    </S.MainContainer>
  )
}

export default HomePage;