import axiosInstance from "../axios";

const deleteDocument = async (id) => {
    const response = axiosInstance.post('https://backend-mongodb-basic-crud.vercel.app/api/v1/crud/delete-document', {
        id
    });
    return response;
}

export default deleteDocument;