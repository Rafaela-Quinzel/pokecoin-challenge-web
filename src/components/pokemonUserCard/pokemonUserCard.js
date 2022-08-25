import React, { useState, useEffect } from 'react';
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
    const [data, setData] = useState(undefined);

    useEffect(() => {
        getHistoryTicker(setData);
        //getTransactionsUser(setTransactions);
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

    return (
        <Box style={{ width: "100%", height: "100%" }}>
            <Card sx={{ maxWidth: 340 }}>
                <CardContent style={{ alignItems: 'center' }}>
                    <Typography gutterBottom variant="h5" component="div" color="primary">
                        {props.pokemon.pokemonName}
                    </Typography>
                    <CardMedia
                        component="img"
                        image={props.pokemon.pokemonImage}
                        alt="pokemon image"
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
                        COTAS: {props.pokemon.quotas}
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
                        VALOR: {props.pokemon.value}
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