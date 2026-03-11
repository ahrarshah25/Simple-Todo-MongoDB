import React, { useContext, useEffect, useState } from "react";
import { FileText, Users, Clock, Activity } from "lucide-react";
import StatCard from "../../Components/Dashboard/Common/StatCard";
import DataTable from "../../Components/Dashboard/Common/DataTable";
import UpdateModal from "../../Components/Dashboard/Modals/UpdateModal";
import { UserDataContext } from "../../context/DashboardUserContext";
import readDocument from "../../api/dashboard/readDocument.api";
import deleteDocument from "../../api/dashboard/deleteDocument.api";
import updateDocument from "../../api/dashboard/updateDocument.api";
import Swal from "sweetalert2";

const Overview = () => {
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
      prev.map((d) => (d._id === updatedDoc._id ? updatedDoc : d)),
    );
    const updatedContext = {
      document: updatedDoc.title,
    };
    const res = await updateDocument(updatedDoc._id, updatedContext);

    if (res.data?.success === true) {
      Swal.fire({
        title: "Updated Successfuly",
        text: "Document Updated Successfully",
        icon: "success",
      });
    }
  };

  const handleDelete = async (id) => {
    setDocuments((prev) => prev.filter((d) => d._id !== id));
    const res = await deleteDocument(id);

    if (res.status(200)) {
      Swal.fire({
        title: "Delted Successfully",
        text: "Document Deleted Successfully",
        icon: "success",
      });
    }
  };

  const todayDocs = documents.filter((doc) => {
    return new Date(doc.createdAt).toDateString() === new Date().toDateString();
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome back, {user.name}!
        </h1>
        <p className="text-gray-400 mt-1">
          Here's what's happening with your documents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Documents"
          value="24"
          icon={FileText}
          trend="+12%"
        />
        <StatCard
          title="Active Collaborators"
          value="6"
          icon={Users}
          trend="+2"
        />
        <StatCard
          title="Recent Updates"
          value="8"
          icon={Clock}
          trend="this week"
        />
        <StatCard title="Views" value="1,234" icon={Activity} trend="+23%" />
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">
          Recent Documents
        </h2>
        <DataTable
          documents={todayDocs}
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
    </div>
  );
};

export default Overview;
