import axiosInstance from "../axios";

const updateDocument = async (id) => {
    axiosInstance.post('https://backend-mongodb-basic-crud.vercel.app/api/v1/crud/update-document', {
        id,
        updatedContent
    });
}

export default updateDocument;