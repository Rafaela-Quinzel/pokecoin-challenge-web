import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetailsPokemon } from '../../routes/coordinator';
import * as S from './styled';

import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia
} from "@material-ui/core";


function PokemonCard(props) {

    const history = useHistory();

    return (
        <S.CardContainer>
            <Box style={{ width: "100%", height: "100%" }}>
                <Card sx={{ maxWidth: 340 }}>
                    <CardContent style={{ alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" color="primary">
                            {props.pokemon.name}
                        </Typography>
                        <CardMedia
                            component="img"
                            image={props.pokemon.image}
                            alt="pokemon image"
                        />
                    </CardContent>
                    <CardActions style={{ display: 'flex', justifyContent: 'center', padding: '30px 0' }}>
                        <Button
                            color="primary"
                            size="large"
                            variant="outlined"
                            onClick={() => goToDetailsPokemon(history, props.pokemon.id)}
                        >
                            detalhes
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </S.CardContainer>
    )
}
export default PokemonCard;