import axiosInstance from "../axios";

const checkAuth = async () => {
    const response = await axiosInstance.get('http://localhost:5000/api/v1/auth/check-auth', {
        credentials: "include"
    });
    return response;
}

export default checkAuth;