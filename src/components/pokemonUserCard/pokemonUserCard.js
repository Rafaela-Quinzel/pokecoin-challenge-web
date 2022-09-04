import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { shell, getHistoryTicker } from '../../services/transactions';

import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia
} from "@material-ui/core";


function PokemonUserCard(props) {
    const [changeValue, setChangeValue] = useState(0);
    const [data, setData] = useState(undefined);
    const [BTC, setBTC] = useState(0);

    useEffect(() => {
        getHistoryTicker(setData);
        //getTransactionsUser(setTransactions);
    }, []);

    const bitcoinSellValue = Number(data && data.ticker.sell) / 100000000;

    const handleSell = async(pokemon) => {
        Swal.fire({
            title: `Quantos você ${pokemon.pokemonName} deseja vender?`,
            input: 'number',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'VENDER',
            cancelButtonText: 'CANCELAR',
            reverseButtons: true
        }).then((change) => {

            if (change.value) {
                setChangeValue(change.value);

                if (Number(change.value) > pokemon.quotas) {
                    Swal.fire({
                        title: `Você tem somente ${pokemon.quotas} ${pokemon.pokemonName}.`,
                        icon: 'warning',
                        reverseButtons: true
                    });

                } else {
                    Swal.fire({
                        icon: 'question',
                        text: `Você confirmar a venda de ${change.value} ${pokemon.pokemonName}?`,
                        showCancelButton: true,
                        confirmButtonText: 'CONTINUAR',
                        cancelButtonText: 'CANCELAR',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            let BTC = bitcoinSellValue * Number(pokemon.pokemonBaseXP);
                            setBTC(BTC)

                            let pokemonSellValue = BTC * Number(change.value);

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
                                    quotas: Number(change.value),
                                    value: pokemonSellValue
                                }
                            }

                            shell(data);

                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                            Swal.fire('Venda cancelada!')
                        }
                    });
                }
            }
        });
    }

    return (
        <Box style={{ width: "100%", height: "100%", maxWidth: '300px' }}>
            <Card sx={{ maxWidth: 340 }}>
                <CardContent style={{ alignItems: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div" color="primary">
                        {props.pokemon.pokemonName}
                    </Typography>
                    <CardMedia
                        component="img"
                        image={props.pokemon.pokemonImage}
                        alt={props.pokemon.pokemonName}
                    />
                </CardContent>
                <CardContent style={{ background: 'rgb(238, 136, 34)', color: '#252525' }}>
                    <Typography
                        variant="body2"
                        style={{ margin: '2% 6%', fontWeight: 'bold', fontSize: '22px' }}
                    >
                        {props.pokemon.pokemonTypes.toUpperCase()}
                    </Typography>

                </CardContent>
                <CardContent style={{ background: '#e0ba61', color: '#252525' }}>
                    <Typography
                        variant="body2"
                        style={{ margin: '2% 6%', fontWeight: 'bold', fontSize: '16px', }}
                    >
                        Quantidade de cotas: {props.pokemon.quotas}
                    </Typography>
                </CardContent>
                <CardContent style={{ background: '#edd678', display: 'flex' }}>
                    <Typography
                        variant="body2"
                        style={{
                            margin: '2% 6%',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            color: '#252525'
                        }}>
                        Preço de venda por cota: {bitcoinSellValue}
                    </Typography>
                </CardContent>
                <CardContent style={{ background: '#f3e4a9', display: 'flex' }}>
                    <Typography
                        variant="body2"
                        style={{
                            margin: '2% 6%',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            color: '#252525'
                        }}>
                        Valor em BTC: {bitcoinSellValue}
                    </Typography>
                </CardContent>

                <CardActions style={{ display: 'flex', justifyContent: 'center', padding: '30px 0' }}>
                    <Button
                        color="secondary"
                        size="large"
                        variant="contained"
                        onClick={() => handleSell(props.pokemon)}
                    >
                        Vender
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}
export default PokemonUserCard;