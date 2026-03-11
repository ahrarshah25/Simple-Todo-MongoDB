import axiosInstance from "../axios";

const readDocument = async (id, type = "getAllUsingID") => {
    const response = await axiosInstance.post("http://localhost:8080/api/v1/crud/read-document", {
        id,
        type
    });
    return response;
}

export default readDocument;