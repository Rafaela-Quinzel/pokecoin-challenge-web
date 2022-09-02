
export const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:27017/';

export const axiosConfig = {
    headers: {
        'authorization': `Bearer ${window.localStorage.getItem('token')}`,
        'Content-Type': "application/json",
        'Accept': 'application/json'
    }
}
