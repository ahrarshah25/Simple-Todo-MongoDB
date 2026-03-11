import axiosInstance from "../axios";

const checkAuth = async () => {
    const response = await axiosInstance.get('https://backend-mongodb-simple-auth.vercel.app/api/v1/auth/check-auth', {
        credentials: "include"
    });
    return response.data?.user;
}

export default checkAuth;