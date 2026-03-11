import axiosInstance from "../axios";

const logout = async () => {
    const response = axiosInstance.get("http://localhost:5000/api/v1/auth/logout");
    return response;
}

export default logout;