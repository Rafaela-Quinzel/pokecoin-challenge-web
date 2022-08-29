import React, { useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { signUp } from '../../services/user';
import { goBack } from '../../routes/coordinator';
import Lottie from 'react-lottie';
import animationData from '../../animations/pikachu.json'

import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';


function SignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [animationState] = useState({
    isStopped: false, isPaused: false
  })

  const { form, onChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const validate = (event) => {
    const passwordOne = form.password;
    const passwordTwo = form.confirmPassword;
    event.preventDefault();
    if (passwordOne === passwordTwo) {
      signUp(form, history);
    } else {
      alert("Por favor, confira sua senha");
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <S.Wrapper>
      <Box style={{ width: "80vw", margin: '10% auto 15% auto', backgroundColor: '#b8bdc5' }}>
        <Card>
          <CardContent style={{ display: 'grid', justifyItems: 'center', alignItems: 'center' }}>
            <Lottie options={defaultOptions}
              height={120}
              width={170}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
            <Typography gutterBottom variant="h5" component="div" style={{ color: 'rgb(238, 136, 34)', fontWeight: "bold", marginTop: '0' }}>
              POKECOIN
            </Typography>
            <S.TitlePage >Fazer cadastro</S.TitlePage>

            <S.FormConteiner onSubmit={validate}>
              <TextField
                value={form.name}
                onChange={handleInputChange}
                variant='outlined'
                label='Nome'
                placeholder='Nome e sobrenome'
                name='name'
                type='text'
                required
              />
              
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
                          />
                          :
                          <VisibilityOff
                            fontSize={'small'}
                          />
                        }
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl variant="outlined" required style={{ margin: '2px 0' }}>
                <InputLabel
                  htmlFor="outlined-adornment-password"
                  margin="dense"
                >
                  Confirmar
                </InputLabel>
                <OutlinedInput
                  label="Confirmar"
                  value={form.confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirme a senha"
                  onChange={handleInputChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ?
                          <Visibility
                            fontSize={'small'}
                          />
                          :
                          <VisibilityOff
                            fontSize={'small'}
                          />
                        }
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button
                variant='contained'
                color="primary"
                type="submit"
              >
                CADASTRAR
              </Button>
              <S.AreaButton>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => goBack(history)}
                >
                  VOLTAR
                </Button>
              </S.AreaButton>
            </S.FormConteiner>
          </CardContent>
        </Card>
      </Box>
    </S.Wrapper>
  )
}
export default SignUpPage;