import axios from 'axios';
import Swal from 'sweetalert2';

import { axiosConfig, BASE_URL } from '../constants/requestConfig';

export const purchase = async (body, history) => {
    await axios.post(`${BASE_URL}transactions/purchase`, body, axiosConfig)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Compra efetuada com sucesso!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            //alert('Compra efetuada com sucesso!');
        }).catch(error => {
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                text: `Erro ao tentar efetuar a compra!\n Tente novamente mais tarde.`,
                confirmButtonText: "OK",
                customClass: 'swal-wide-error'
            });
            //alert(`Ocorreu uma falha interna, tente novamente mais tarde`)
        });
}

export const shell = async (body, history) => {
    await axios.post(`${BASE_URL}transactions/sell`, body, axiosConfig)
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Venda efetuada com sucesso!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            //alert('Venda efetuada com sucesso!');
        }).catch(error => {
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                text: `Erro ao tentar efetuar a venda!\n Tente novamente mais tarde.`,
                confirmButtonText: "OK",
                customClass: 'swal-wide-error'
            });
            //alert(`Ocorreu uma falha interna, tente novamente mais tarde`)
        });
}

export const getHistoryTicker = async (setData) => {
    await axios.get(`${BASE_URL}transactions/ticker`, axiosConfig)
        .then(response => {
            setData(response.data);
        }).catch(error => {
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                text: `Ocorreu uma falha interna, tente novamente mais tarde.`,
                confirmButtonText: "OK",
                customClass: 'swal-wide-error'
            });
            //alert(`Ocorreu uma falha interna, tente novamente mais tarde`)
        });
}

export const getTransactionsUser = async (setTransactions) => {
    await axios.get(`${BASE_URL}transactions`, axiosConfig)
        .then(response => {
            setTransactions(response.data);
            //setTransactions(response.data.transactions);
        }).catch(error => {
            console.log(error.message);
            Swal.fire({
                icon: 'error',
                    text: `Ocorreu uma falha interna, tente novamente mais tarde.`,
                    confirmButtonText: "OK",
                    customClass: 'swal-wide-error'
                });
            //alert(`Ocorreu uma falha interna, tente novamente mais tarde`)
        });
}