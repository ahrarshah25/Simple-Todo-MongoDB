import { useState } from 'react';
import DataTable from '../../Components/Dashboard/Common/DataTable';
import UpdateModal from '../../Components/Dashboard/Modals/UpdateModal';

const initialDocs = [
  { id: 1, title: 'Project Proposal', created: '2026-03-01', updated: '2026-03-05' },
  { id: 2, title: 'Meeting Notes', created: '2026-03-02', updated: '2026-03-04' },
  { id: 3, title: 'API Documentation', created: '2026-02-28', updated: '2026-03-03' },
  { id: 4, title: 'Design System', created: '2026-02-25', updated: '2026-03-01' },
];

const YourDocuments = () => {
  const [documents, setDocuments] = useState(initialDocs);
  const [editingDoc, setEditingDoc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (doc) => {
    setEditingDoc(doc);
    setIsModalOpen(true);
  };

  const handleUpdate = (updatedDoc) => {
    setDocuments((prev) =>
      prev.map((d) => (d.id === updatedDoc.id ? updatedDoc : d))
    );
  };

  const handleDelete = (id) => {
    setDocuments((prev) => prev.filter((d) => d.id !== id));
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