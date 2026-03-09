import checkUserAuth from "../utils/checkAuth"

const authRedictHandler = async () => {
    const user = checkUserAuth();

    if(user) {
        return window.location.href = "/dashboard"
    }
};

export default authRedictHandler;