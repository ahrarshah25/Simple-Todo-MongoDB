import axiosInstance from "../axios";

const logout = async () => {
    const response = axiosInstance.get("https://backend-mongodb-simple-auth.vercel.app/api/v1/auth/logout");
    return response;
}

export default logout;