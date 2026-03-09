import { Edit, Trash2 } from 'lucide-react';
import Button from '../../LandingPage/Navbar/Button';

const DataTable = ({ documents, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider">
              Created
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider">
              Updated
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {documents.map((doc) => (
            <tr key={doc.id} className="hover:bg-gray-750">
              <td className="px-6 py-4 text-sm text-white">{doc.title}</td>
              <td className="px-6 py-4 text-sm text-gray-400">{doc.created}</td>
              <td className="px-6 py-4 text-sm text-gray-400">{doc.updated}</td>
              <td className="px-6 py-4 text-sm space-x-2">
                <button
                  onClick={() => onEdit(doc)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => onDelete(doc.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;