export const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:27017/';

const token = `Bearer ${localStorage.getItem('token')}`;
export const axiosConfig = {
    headers: {
        Authorization: token,
        "Content-Type": "application/json"
    }
}
