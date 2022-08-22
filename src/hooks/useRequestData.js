import { useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig } from '../constants/requestConfig';


export function useRequestData(url, initialState) {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        axios
            .get(url, axiosConfig)
            .then((response) => {  
                setData(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
            axios.create({
                withCredentials: true
                })
    }, [url]);

    return data;
}