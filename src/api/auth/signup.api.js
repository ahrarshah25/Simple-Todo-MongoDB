import axiosInstance from '../axios';

const signup = async (name, email, password) => {
    const response = await axiosInstance.post('https://backend-mongodb-simple-auth.vercel.app/api/v1/auth/signup', {
        name,
        email,
        password
    });
    return response;
};

export default signup;