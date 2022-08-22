import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToDetailsPokemon } from '../../routes/coordinator';

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


function PokemonCard(props) {

    const history = useHistory()

    return (
        <Box style={{ width: "85%", height: "80%" }}>
            <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
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
                </CardActionArea>
            </Card>
        </Box>
    )
}
export default PokemonCard;