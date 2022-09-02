/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
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
  CardMedia
} from "@material-ui/core";


function pokemonDetailsPage() {
  const [changeValue, setChangeValue] = useState(1);
  const [data, setData] = useState(undefined);

  useProtectPage();

  const { id } = useParams();

  const getPokemon = useRequestData(`${BASE_URL}pokemon/${id}`, axiosConfig);

  useEffect(() => {
    getHistoryTicker(setData)
  }, []);

  const btcValue = Number(data && data.ticker.buy) / 100000000;

  let BTC = btcValue * Number(getPokemon?.pokemon?.base_experience);

  let buyValue = BTC * changeValue;

  const handlePurchese = () => {
    Swal.fire({
      title: 'Quantos você deseja comprar?',
      input: 'number',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'COMPRAR',
      cancelButtonText: 'CANCELAR',
      reverseButtons: true
    }).then((change) => {
      if (change.value) {
        setChangeValue(change.value);
        Swal.fire({
          icon: 'info',
          text: `${change.value} ${getPokemon.pokemon && getPokemon.pokemon.name} equivalem a BTC ${buyValue}`,
          showCancelButton: true,
          confirmButtonText: 'CONTINUAR',
          cancelButtonText: 'CANCELAR',
        }).then((result) => {
          if (result.isConfirmed) {
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
                quotas: change.value,
                value: buyValue
              }
            }

            purchase(data);

          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            Swal.fire(
              'Compra cancelada!',
            )
          }
        })
      }
    });
  }

  return (
    <S.MainContainer>
      <Box style={{ width: '70%', maxWidth: '550px', margin: '100px auto 50px auto' }}>
        <Card>
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
          <CardContent style={{ background: 'rgb(238, 136, 34)', height: '50px', display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="body2"
              style={{ margin: '2% 6%', fontWeight: 'bold', fontSize: '22px', color: '#252525' }}
            >
              {getPokemon.pokemon && getPokemon.pokemon.types[0] && getPokemon.pokemon.types[0].type.name.toUpperCase()}
            </Typography>

          </CardContent>
          <CardContent style={{ background: '#e0ba61', display: 'flex', height: '50px', alignItems: 'center' }}>
            <Typography
              variant="body2"
              style={{
                margin: '2% 6%',
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#252525'
              }}>
              XP: {getPokemon.pokemon && getPokemon.pokemon.base_experience}
            </Typography>
            <Typography
              variant="body2"
              color="secondary"
              style={{
                margin: '2% 6%',
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#252525'
              }}>
              BTC: {getPokemon.pokemon && getPokemon.pokemon.base_experience}
            </Typography>
          </CardContent>
          <CardContent style={{ background: '#edd678', }}>
            <Typography
              variant="body2"
              color="secondary"
              style={{
                margin: '0 6%',
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#252525'
              }}>
              {`${changeValue} ${getPokemon.pokemon && getPokemon.pokemon.name} equivalem a BTC ${buyValue}`}
            </Typography>
          </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'center', padding: '45px 0' }}>
            <Button
              color="primary"
              size="small"
              variant="contained"
              style={{ width: '75%', padding: '16px', fontSize: '1.2rem' }}
              onClick={() => handlePurchese()}
            >
              comprar
            </Button>
          </CardActions>
        </Card>
      </Box>
    </S.MainContainer>
  )
}

export default pokemonDetailsPage;
