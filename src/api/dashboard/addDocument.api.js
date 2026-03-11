import axiosInstance from "../axios";

const addDoc = async (id, document) => {
    const response = await axiosInstance.post('http://localhost:8080/api/v1/crud/add-document', {
        id,
        document
    });
    return response;
}

export default addDoc;