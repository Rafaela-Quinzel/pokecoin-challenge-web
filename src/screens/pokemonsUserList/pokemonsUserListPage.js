import React, { useEffect, useState } from 'react';
import * as S from './styled';

import { BASE_URL, axiosConfig } from '../../constants/requestConfig'
import { useRequestData } from '../../hooks/useRequestData';
import { useProtectPage } from '../../hooks/useProtectPage';
import { getHistoryTicker, getTransactionsUser } from '../../services/transactions';
import PokemonUserCard from '../../components/pokemonUserCard/pokemonUserCard';

function PokemonsUserList() {
  const [data, setData] = useState(undefined);
  const [transactions, setTransactions] = useState(undefined);


  useProtectPage();

  const getPokemons = useRequestData(`${BASE_URL}pokemon/list`, axiosConfig);

  useEffect(() => {
    getHistoryTicker(setData);
    getTransactionsUser(setTransactions);
  }, []);

  return getPokemons && getPokemons.userPokemonList?.length !== 0 ? (
    <S.MainContainer>
      <S.CardContainer>
        {getPokemons?.userPokemonList && getPokemons?.userPokemonList.map((pokemon, index) => {
          return (
            <PokemonUserCard
              key={index}
              pokemon={pokemon}
            />
          )
        })}
      </S.CardContainer>
    </S.MainContainer>
  ) : (
    <S.NoResults>
      <S.TitleNoResults>Você ainda não tem Pokemons</S.TitleNoResults>
    </S.NoResults>
  )
}

export default PokemonsUserList;