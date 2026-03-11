import axiosInstance from "../axios";

const addDoc = async (id, document) => {
    const response = await axiosInstance.post('https://backend-mongodb-basic-crud.vercel.app/api/v1/crud/add-document', {
        id,
        document
    });
    return response;
}

export default addDoc;