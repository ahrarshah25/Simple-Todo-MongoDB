import axiosInstance from "../axios";

const updateDocument = async (id, updatedContent) => {
    const response = axiosInstance.post('http://localhost:8080/api/v1/crud/update-document', {
        id,
        updatedContent
    });
    return response;
}

export default updateDocument;