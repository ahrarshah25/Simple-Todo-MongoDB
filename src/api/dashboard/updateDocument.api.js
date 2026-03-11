import axiosInstance from "../axios";

const updateDocument = async (id, updatedContent) => {
    const response = axiosInstance.post('https://backend-mongodb-basic-crud.vercel.app/api/v1/crud/update-document', {
        id,
        updatedContent
    });
    return response;
}

export default updateDocument;