export const BASE_URL = "http://localhost:27017/";

const token = `Bearer ${localStorage.getItem('token')}`;
export const axiosConfig = {
    headers: {
        authorization: token
    }
}