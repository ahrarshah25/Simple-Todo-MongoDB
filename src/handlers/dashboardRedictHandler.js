import checkUserAuth from "../utils/checkAuth"

const dashboardRedictHandler = async () => {
    const user = checkUserAuth();

    if(!user) {
        return window.location.href = "/login"
    }
};

export default dashboardRedictHandler;