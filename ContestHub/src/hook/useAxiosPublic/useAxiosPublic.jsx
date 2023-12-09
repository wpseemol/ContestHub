import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://contest-hub-server-seven.vercel.app',
    withCredentials: true,
});

const useAxiosPublic = () => {
    return instance;
};

export default useAxiosPublic;
