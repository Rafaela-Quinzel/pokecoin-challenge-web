import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as S from './styled';

import { BASE_URL, axiosConfig } from '../../constants/requestConfig'
import { useRequestData } from '../../hooks/useRequestData';
import PokemonCard from '../../components/pokemonCard/pokemonCard';
import { useProtectPage } from '../../hooks/useProtectPage';


function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setMyPage] = useState(0);

  const limit = 20;

  useProtectPage();

  const getPokemons = useRequestData(`${BASE_URL}pokemon?limit=${limit}&page=${page}`, axiosConfig);

  useEffect(() => {
    if ('pokemons' in getPokemons) setIsLoading(false);
  }, [getPokemons, page]);


  const setPage = async (e, p) => {
    let currentPage = p - 1;
    setMyPage(currentPage);
    window.scrollTo(0, 0);
  }

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
      <S.PaginationContainer>
        <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
          <Pagination
            count={50}
            color="secondary"
            onChange={setPage}
            shape='rounded'
            component="div"
            size="large"
            sx={{
              '& .Mui-selected': {
                //backgroundColor: '#bd2bba',
                color: 'white',
              }, "& .MuiPaginationItem-root": {
                color: "white",
                //fontSize: '1rem',
                //width: '80%',
                //border: '1px solid blue'
              }
            }}
          />
        </Stack>
      </S.PaginationContainer>
    </S.MainContainer >
  )
}

export default HomePage;