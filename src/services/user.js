import axios from 'axios';
import Swal from 'sweetalert2';

import { BASE_URL } from '../constants/requestConfig';
import { goToHome } from '../routes/coordinator';

export const login = (body, history) => {
    axios.post(`${BASE_URL}user/login`, body)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            Swal.fire({
                //icon: 'success',
                imageUrl: 'https://lh3.googleusercontent.com/EXOHMMD-wXatpjRbYSMqr127gDCSmqxtQ9J5PoV38vJOu_MMKnC8N2EJXlIgq_z-iyDrqntQ25vfg6cNfhWQa7HOrKiHaig_ZxbFf4A=w150',
                text: `Bem vindo (a) ${response.data.user.name}!`,
                confirmButtonText: "OK",
                customClass: 'swal-wide-success',
            });

            goToHome(history);

            //alert(`Bem vindo(a) ${response.data.user.name}!`);

        }).catch(error => {
            console.log(error.message);
            if (error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    text: 'Usuário ou senha inválidos!',
                    confirmButtonText: "OK",
                    customClass: 'swal-wide-error'
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Ocorreu uma falha interna, tente novamente mais tarde.',
                    confirmButtonText: "OK",
                    customClass: 'swal-wide-error'
                });
            }
        });
}

export const signUp = (body, history) => {
    axios.post(`${BASE_URL}user/register`, body)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            Swal.fire({
                icon: 'success',
                text: 'Cadastro efetuado com sucesso!',
                confirmButtonText: "OK",
                customClass: 'swal-wide-success',
            });
            //alert('Cadastro efetuado com sucesso!');
            goToHome(history);

        }).catch(error => {
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                text: 'Ocorreu uma falha interna, tente novamente mais tarde.',
                confirmButtonText: "OK",
                customClass: 'swal-wide-error'
            });
        });
}
