import axios from 'axios';
import Swal from 'sweetalert2';

import { BASE_URL, axiosConfig } from '../constants/requestConfig';
import { goToDetailsPokemon } from '../routes/coordinator';


export const getDetails = async (id, history) => {
    await axios.get(`${BASE_URL}pokemon/${id}`, axiosConfig)
        .then(response => {
            goToDetailsPokemon(history, id);
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