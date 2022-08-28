import { useState, useEffect } from "react";
import axios from "axios";
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
        })().catch(e=>alert(e));
    }, [url]);

    return data;
}