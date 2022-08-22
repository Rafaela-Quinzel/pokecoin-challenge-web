/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styled';

import { BASE_URL, axiosConfig } from '../../constants/requestConfig'
import { useRequestData } from '../../hooks/useRequestData';
import { useProtectPage } from '../../hooks/useProtectPage';
import { purchase, getHistoryTicker } from '../../services/transactions';

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


function pokemonDetailsPage() {
  const [changeValue, setChangeValue] = React.useState(1);
  const [data, setData] = React.useState(undefined);

  useProtectPage();

  const { id } = useParams();

  const getPokemon = useRequestData(`${BASE_URL}pokemon/${id}`, axiosConfig);

  useEffect(() => {
    getHistoryTicker(setData)
  }, []);

  const btcValue = Number(data && data.ticker.buy) / 100000000;
  console.log('btcValue: ', btcValue)
  console.log('base_experience: ', getPokemon.pokemon && getPokemon.pokemon.base_experience)

  let BTC = btcValue * Number(getPokemon.pokemon && getPokemon.pokemon.base_experience);
  console.log('BTC: ', BTC)
  let buyValue = BTC * changeValue;

  const handlePurchese = async () => {
    const data = {
      type: "buy",
      pokemon: {
        name: getPokemon.pokemon.name,
        image: getPokemon.pokemon.image,
        id: getPokemon.pokemon.id,
        types: getPokemon.pokemon.types[0].type.name,
        baseXP: getPokemon.pokemon.base_experience,
      },
      info: {
        BTCDay: BTC,
        quotas: changeValue,
        value: buyValue
      }
    }

    purchase(data);

  }

  return (
    <S.MainContainer>
      <Box style={{ marginTop: '80px' }}>
        <Card>
          <CardActionArea >
            <CardContent style={{ padding: '0 auto', textItems: 'center' }}>
              <Typography gutterBottom variant="h3" component="div" color="primary">
                {getPokemon.pokemon && getPokemon.pokemon.name}
              </Typography>
              <CardMedia
                component="img"
                image={getPokemon.pokemon && getPokemon.pokemon.image}
                alt="pokemon image"
                style={{ width: '60%', margin: 'auto' }}
              />
            </CardContent>
            <CardContent style={{ background: 'rgb(238, 136, 34)' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ margin: '2% 6%', fontWeight: 'bold', fontSize: '22px' }}
              >
                {getPokemon.pokemon && getPokemon.pokemon.types[0] && getPokemon.pokemon.types[0].type.name.toUpperCase()}
              </Typography>

            </CardContent>
            <CardContent style={{ background: '#e0ba61', display: 'flex' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  margin: '2% 6%',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: '#252525'
                }}>
                XP: {getPokemon.pokemon && getPokemon.pokemon.base_experience}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  margin: '2% 6%',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: '#252525'
                }}>
                BTC: {getPokemon.pokemon && getPokemon.pokemon.base_experience}
              </Typography>
            </CardContent>
            <CardContent style={{ background: '#edd678', }}>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  margin: '0 6%',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: '#252525'
                }}>
                {`${changeValue} ${getPokemon.pokemon && getPokemon.pokemon.name} equivalem a BTC ${buyValue}`}
              </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'center', padding: '45px 0' }}>
              <Button
                color="primary"
                size="large"
                variant="contained"
                style={{ width: '75%', padding: '16px', fontSize: '1.2rem' }}
                onClick={() => handlePurchese()}
              >
                comprar
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Box>
    </S.MainContainer>
  )
}

export default pokemonDetailsPage;