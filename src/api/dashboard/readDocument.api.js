import axiosInstance from "../axios";

const readDocument = async (id) => {
    const response = await axiosInstance.get("https://backend-mongodb-basic-crud.vercel.app/api/v1/crud/read-document", {
        id
    });
    return response;
}

export default readDocument;