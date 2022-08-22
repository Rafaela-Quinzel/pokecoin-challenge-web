import axios from 'axios';
import { BASE_URL, axiosConfig } from '../constants/requestConfig';
import { goToDetailsPokemon } from '../routes/coordinator';


export const getDetails = async (id, history) => {
    await axios.get(`${BASE_URL}pokemon/${id}`, axiosConfig)
        .then(response => {
            window.localStorage.setItem('token', response.data.token);
            goToDetailsPokemon(history, id);
        }).catch(error => {
            console.log(error.message);
        });
}