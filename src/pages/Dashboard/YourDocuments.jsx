import { useContext, useState, useEffect } from "react";
import DataTable from "../../Components/Dashboard/Common/DataTable";
import UpdateModal from "../../Components/Dashboard/Modals/UpdateModal";
import { UserDataContext } from "../../context/DashboardUserContext";
import readDocument from "../../api/dashboard/readDocument.api";
import deleteDocument from "../../api/dashboard/deleteDocument.api";
import updateDocument from "../../api/dashboard/updateDocument.api"
import Swal from "sweetalert2";

const YourDocuments = () => {

  const user = useContext(UserDataContext);

  const [documents, setDocuments] = useState([]);
  const [editingDoc, setEditingDoc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {

    if (!user?._id) return;

    const getDocs = async () => {
      try {
        const res = await readDocument(user._id);
        
        setDocuments(res?.data?.data || []);
      } catch (error) {
        console.log(error);
      }
    };

    getDocs();

  });

  const handleEdit = (doc) => {
    setEditingDoc(doc);
    setIsModalOpen(true);
  };

  const handleUpdate = async (updatedDoc) => {
    setDocuments((prev) =>
      prev.map((d) => (d._id === updatedDoc._id ? updatedDoc : d))
    );
    const updatedContext = {
      document: updatedDoc.title
    };
    const res = await updateDocument(updatedDoc._id, updatedContext);
   
    if(res.data?.success === true){
      Swal.fire({
        title: "Updated Successfuly",
        text: "Document Updated Successfully",
        icon: "success"
      })
    }
  };

  const handleDelete = async (id) => {
    setDocuments((prev) => prev.filter((d) => d._id !== id));
    const res = await deleteDocument(id);
    
    if(res.status(200)) {
      Swal.fire({
        title: "Delted Successfully",
        text: "Document Deleted Successfully",
        icon:"success"
      })
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Your Documents</h1>

      <DataTable
        documents={documents}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        document={editingDoc}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default YourDocuments;