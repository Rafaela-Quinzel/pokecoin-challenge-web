import axios from 'axios';
import { BASE_URL } from '../constants/requestConfig';
import { goToHome } from '../routes/coordinator';

export const login = (body, history) => {
    axios.post(`${BASE_URL}user/login`, body)
    .then(response => {
        localStorage.setItem('token', response.data.token);
        alert('Bem vindo(a)!');
        goToHome(history)
    }).catch(error => {
        console.log(error.message);
    });
}

export const signUp = (body, history) => {
    axios.post(`${BASE_URL}user/register`, body)
        .then(response => {
            window.localStorage.setItem('token', response.data.token);
            alert('Cadastro efetuado com sucesso!');
            goToHome(history);
        }).catch(error => {
            console.log(error.message);
        });
}