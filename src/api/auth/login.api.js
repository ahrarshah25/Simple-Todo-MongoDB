import axiosInstance from '../axios';

const login = async (email, password) => {
    const response = await axiosInstance.post('http://localhost:5000/api/v1/auth/login', {
        email,
        password
    });
    return response;
};

export default login;