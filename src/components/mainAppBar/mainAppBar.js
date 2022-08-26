import React from 'react'
import * as S from './styled';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { logout, goToHome, goToPokemonsUser } from '../../routes/coordinator';

const MainAppBar = () => {
  const history = useHistory()

  return (
    <AppBar className={'appbar'}>
      <Toolbar>
        <S.ButtonsContainer>
          <Button
            color="inherit"
            onClick={() => goToHome(history)}
          >
            Home
          </Button>
          <S.ButtonsContainer>
            <Button
              color="inherit"
              style={{marginLeft: '24px', marginRight: '25px'}}
              onClick={() => goToPokemonsUser(history)}
            >
              Meus pokemons
            </Button>
            <Button
              color="inherit"
              onClick={() => logout(history)}
            >
              Logout
            </Button>

          </S.ButtonsContainer>
        </S.ButtonsContainer>
      </Toolbar>
    </AppBar>
  )
}
export default MainAppBar;