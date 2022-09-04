import React, { useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import useUnProtectedPage from '../../hooks/useUnProtectedPage';
import { login } from '../../services/user'
import { goToSignUp } from '../../routes/coordinator';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import pokecoin from '../../assets/pokecoin.png';

import {
  TextField,
  Button,
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  Box,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';


function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);

  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  useUnProtectedPage();

  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form, history);
  }

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }


  return (
    <S.Wrapper>
      <Box style={{ width: "80vw", height: "30%", marginTop: '100px', backgroundColor: '#b8bdc5'}}>
        <Card>
          <CardContent style={{ display: 'grid', justifyItems: 'center', alignItems: 'center' }}>
            <S.Logo src={pokecoin} style={{ width: "24%", height: "60%" }} />
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'rgb(238, 136, 34)', fontWeight: "bold" }}>
              POKECOIN
            </Typography>
            <S.FormInputsLogin onSubmit={handleSubmit}>
              <TextField
                value={form.email}
                onChange={handleInputChange}
                variant='outlined'
                label='E-mail'
                placeholder='email@email.com'
                name='email'
                type='email'
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
                required
              />
              <FormControl variant="outlined" required>
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  margin="dense"
                >
                  Senha
                </InputLabel>
                <OutlinedInput
                  label="Senha"
                  value={form.password}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mínimo 6 caracteres"
                  onChange={handleInputChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {showPassword ?
                          <Visibility
                            fontSize={'small'}
                          /> :
                          <VisibilityOff
                            fontSize={'small'}
                          />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <S.AreaButton>
                <Button
                  variant='contained'
                  color="primary"
                  type="submit"
                >
                  LOGIN
                </Button>
                <Button
                  color="primary"
                  onClick={() => goToSignUp(history)}
                >
                  Não possui cadastro?
                  Clique aqui.
                </Button>
              </S.AreaButton>
            </S.FormInputsLogin>
          </CardContent>
        </Card>
      </Box>
    </S.Wrapper>
  )
}
export default LoginPage;

