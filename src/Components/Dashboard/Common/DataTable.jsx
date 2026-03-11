import { Edit, Trash2 } from "lucide-react";

const DataTable = ({ documents, onEdit, onDelete }) => {

  if (documents === null) {
    return (
      <div className="flex items-center justify-center h-60">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-300 animate-pulse">Loading Documents...</p>
        </div>
      </div>
    );
  }

  if (documents.length === 0) {
    return (
      <div className="flex items-center justify-center h-60 bg-gray-800 rounded-lg border border-gray-700">
        <p className="text-gray-400 text-lg font-semibold">
          No Documents Found
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">
              Title
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">
              Created
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">
              Updated
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-300 uppercase">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-700">
          {documents.map((doc) => (
            <tr key={doc._id} className="hover:bg-gray-750">
              <td className="px-6 py-4 text-sm text-white">
                {doc.document}
              </td>

              <td className="px-6 py-4 text-sm text-gray-400">
                {new Date(doc.createdAt).toLocaleString()}
              </td>

              <td className="px-6 py-4 text-sm text-gray-400">
                {doc.updatedAt === doc.createdAt
                  ? "Not Updated Yet"
                  : new Date(doc.updatedAt).toLocaleString()}
              </td>

              <td className="px-6 py-4 text-sm space-x-2">
                <button
                  onClick={() => onEdit(doc)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Edit size={18} />
                </button>

                <button
                  onClick={() => onDelete(doc._id)}
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