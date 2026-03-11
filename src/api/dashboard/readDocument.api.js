import axiosInstance from "../axios";

const readDocument = async (id, type = "getAllUsingID") => {
    const response = await axiosInstance.post("https://backend-mongodb-basic-crud.vercel.app/api/v1/crud/read-document", {
        id,
        type
    });
    return response;
}

export default readDocument;