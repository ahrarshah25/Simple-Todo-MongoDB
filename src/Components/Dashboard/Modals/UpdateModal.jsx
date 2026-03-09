import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Input from '../../Auth/Input';
import Button from '../../LandingPage/Navbar/Button';

const UpdateModal = ({ isOpen, onClose, document, onUpdate }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (document) {
      setTitle(document.title);
    }
  }, [document]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...document, title });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md border border-gray-700">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Update Document</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <Input
            label="Document Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new title"
            required
          />
          <div className="flex justify-end space-x-3 mt-6">
            <Button type="button" onClick={onClose} className="bg-gray-700 hover:bg-gray-600">
              Cancel
            </Button>
            <Button type="submit">Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;