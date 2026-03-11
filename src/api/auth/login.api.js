import axiosInstance from '../axios';

const login = async (email, password) => {
    const response = await axiosInstance.post('https://backend-mongodb-simple-auth.vercel.app/api/v1/auth/login', {
        email,
        password
    });
    return response;
};

export default login;