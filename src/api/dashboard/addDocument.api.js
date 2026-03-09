import axiosInstance from "../axios";

const addDocument = async (id, document) => {
    axiosInstance.post('https://backend-mongodb-basic-crud.vercel.app/api/v1/crud/add-document', {
        id,
        document
    });
}

export default addDocument;