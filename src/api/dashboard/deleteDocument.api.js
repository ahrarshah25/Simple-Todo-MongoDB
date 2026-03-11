import axiosInstance from "../axios";

const deleteDocument = async (id) => {
    const response = axiosInstance.post('http://localhost:8080/api/v1/crud/delete-document', {
        id
    });
    return response;
}

export default deleteDocument;