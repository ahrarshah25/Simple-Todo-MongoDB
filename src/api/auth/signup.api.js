import axiosInstance from '../axios';

const signup = async (name, email, password) => {
    const response = await axiosInstance.post('http://localhost:5000/api/v1/auth/signup', {
        name,
        email,
        password
    });
    return response;
};

export default signup;