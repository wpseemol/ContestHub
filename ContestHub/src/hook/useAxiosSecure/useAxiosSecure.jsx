import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://contest-hub-server-seven.vercel.app',
    withCredentials: true,
});

const useAxiosSecure = () => {
    return instance;
};

export default useAxiosSecure;
