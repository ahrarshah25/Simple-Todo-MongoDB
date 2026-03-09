import axiosInstance from "../axios";

const deleteDocument = async (id) => {
    axiosInstance.post('https://backend-mongodb-basic-crud.vercel.app/api/v1/crud/delete-document', {
        id
    });
}

export default deleteDocument;