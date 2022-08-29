import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { axiosConfig } from '../constants/requestConfig';


export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        (async () => {
            await axios
            .get(url, axiosConfig)
            .then((response) => {  
                setData(response.data)
            })
            .catch((error) => {
                console.log(error.message)
                if(error.message.includes('401')) {
                    console.log('SIM, TEM CODE 401')
                }
            })
            axios.create({
                withCredentials: true
                })
        })().catch(error => {
            Swal.fire({
                icon: 'error',
                text: 'Ocorreu uma falha interna, tente novamente mais tarde.',
                confirmButtonText: "OK",
                customClass: 'swal-wide-error'
            });
        });
    }, [url]);

    return data;
}