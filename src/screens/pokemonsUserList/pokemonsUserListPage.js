/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import * as S from './styled';

import { BASE_URL, axiosConfig } from '../../constants/requestConfig'
import { useRequestData } from '../../hooks/useRequestData';
import { useProtectPage } from '../../hooks/useProtectPage';
import { shell, getHistoryTicker, getTransactionsUser } from '../../services/transactions';

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  CardMedia
} from "@material-ui/core";


function PokemonsUserList() {
  const [data, setData] = React.useState(undefined);
  const [transactions, setTransactions] = React.useState(undefined);
  

  useProtectPage();

  const getPokemons = useRequestData(`${BASE_URL}pokemon/list`, axiosConfig);

  useEffect(() => {
    getHistoryTicker(setData);
    getTransactionsUser(setTransactions);
  }, []);


  const btcValue = Number(data && data.ticker.buy) / 100000000;

  const handleSell = async (pokemon) => {

    let BTC = btcValue * Number(pokemon.pokemonBaseXP);

    const data = {
      type: "sell",
      pokemon: {
        name: pokemon.pokemonName,
        image: pokemon.pokemonImage,
        id: pokemon.pokemonId,
        types: pokemon.pokemonTypes,
        baseXP: pokemon.pokemonBaseXP,
      },
      info: {
        BTCDay: BTC,
        quotas: pokemon.quotas,
        value: pokemon.value
      }
    }

    shell(data);
  }

  return getPokemons && getPokemons.userPokemonList?.length !== 0 ? (
    <S.MainContainer>
      <S.CardContainer>
        {getPokemons.userPokemonList && getPokemons.userPokemonList.map((poke) => {
          return (
            <Box style={{ width: "85%", height: "80%" }}>
              <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
                  <CardContent style={{ alignItems: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div" color="primary">
                      {poke.pokemonName}
                    </Typography>
                    <CardMedia
                      component="img"
                      image={poke.pokemonImage}
                      alt="pokemon image"
                    />
                  </CardContent>
                  <CardContent style={{ background: 'rgb(238, 136, 34)' }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ margin: '2% 6%', fontWeight: 'bold', fontSize: '22px' }}
                    >
                      {poke.pokemonTypes.toUpperCase()}
                    </Typography>

                  </CardContent>
                  <CardContent style={{ background: '#e0ba61' }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ margin: '2% 6%', fontWeight: 'bold', fontSize: '16px', }}
                    >
                      COTAS: {poke.quotas}
                    </Typography>

                  </CardContent>
                  <CardContent style={{ background: '#edd678', display: 'flex' }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        margin: '2% 6%',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        color: '#252525'
                      }}>
                      VALOR: {poke.value}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ display: 'flex', justifyContent: 'center', padding: '30px 0' }}>
                    <Button
                      color="secondary"
                      size="large"
                      variant="contained"
                      onClick={() => handleSell(poke)}
                    >
                      Vender
                    </Button>

                  </CardActions>
                </CardActionArea>
              </Card>
            </Box>
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