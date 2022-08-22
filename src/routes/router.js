import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../screens/login/loginPage";
import SignUpPage from "../screens/signup/signupPage";
import PokemonDetails from "../screens/pokemonDetails/pokemonDetailsPage";
import PokemonsUserList from "../screens/pokemonsUserList/pokemonsUserListPage";
import HomePage from "../screens/home/homePage";
import SplashScreen from "../screens/splashScreen/splashScreen";


export default function Router() {

    return (
        <Switch>
            <Route exact path="/">
                <SplashScreen />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage />
            </Route>
            <Route exact path="/pagina_inicial">
                <HomePage />
            </Route>
            <Route exact path="/detalhes/:id">
                <PokemonDetails />
            </Route>
            <Route exact path="/meus_pokemons">
                <PokemonsUserList />
            </Route>
        </Switch>
    )
}

