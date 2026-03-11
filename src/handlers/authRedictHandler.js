import checkUserAuth from "../utils/checkAuth"

const authRedictHandler = async () => {
    const user = checkUserAuth();
    const token = document.cookie.includes("token");

    if(user) {
        return window.location.href = "/dashboard"
    }
};

export default authRedictHandler;