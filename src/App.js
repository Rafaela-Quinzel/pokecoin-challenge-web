import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'animate.css';
import './styles/global.css'
import Router from './routes/router';
import MainAppBar from './components/mainAppBar/mainAppBar';

function App() {
  window.document.title = "Pokecoin";

  return (
    <BrowserRouter>
      <Route exact
        path={[
          '/detalhes/:id',
          '/pagina_inicial',
          '/meus_pokemons'
        ]}
      >
        <MainAppBar position="static"/>
      </Route>
      <Router />
    </BrowserRouter>
  )
}
export default App;

