import axios from 'axios';
import { axiosConfig, BASE_URL } from '../constants/requestConfig';

export const purchase = async (body, history) => {
    await axios.post(`${BASE_URL}transactions/purchase`, body, axiosConfig)
    .then(response => {
        alert('Compra efetuada com sucesso!');
    }).catch(error => {
        console.log(error.message);
        alert(`Ocorreu uma falha interna, tente novamente mais tarde`)
    });
}

export const shell = async (body, history) => {
    await axios.post(`${BASE_URL}transactions/sell`, body, axiosConfig)
    .then(response => {
        console.log("RESPONSE: ", response)
        alert('Venda efetuada com sucesso!');
    }).catch(error => {
        console.log(error.message);
        alert(`Ocorreu uma falha interna, tente novamente mais tarde`)
    });
}

export const getHistoryTicker = async (setData) => {
    await axios.get(`${BASE_URL}transactions/ticker`, axiosConfig)
    .then(response => {
        setData(response.data.data);
    }).catch(error => {
        console.log(error.message);
        alert(`Ocorreu uma falha interna, tente novamente mais tarde`)
    });
}

export const getTransactionsUser = async (setTransactions) => {
    await axios.get(`${BASE_URL}transactions`, axiosConfig)
    .then(response => {
        setTransactions(response.data.transactions);
    }).catch(error => {
        console.log(error.message);
        alert(`Ocorreu uma falha interna, tente novamente mais tarde`)
    });
}