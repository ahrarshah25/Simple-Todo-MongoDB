import checkAuth from "../api/auth/checkAuth.api";

const checkUserAuth = async () => {
    const currentUser = await checkAuth();

    return currentUser;
}

export default checkUserAuth;