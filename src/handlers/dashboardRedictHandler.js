import checkUserAuth from "../utils/checkAuth"

const dashboardRedictHandler = async () => {
    const user = checkUserAuth();
    const token = document.cookie.includes("token");

    if(!user) {
        window.location.href = "/login"
        return;
    }

    
};

export default dashboardRedictHandler;