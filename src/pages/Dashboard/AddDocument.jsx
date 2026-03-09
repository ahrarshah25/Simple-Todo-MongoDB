import { useState } from 'react';
import Input from '../../Components/Auth/Input';
import Button from '../../Components/LandingPage/Navbar/Button';

const AddDocument = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding document:', title);
    setTitle('');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Add New Document</h1>
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <form onSubmit={handleSubmit}>
          <Input
            label="Document Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter document title"
            required
          />
          <Button type="submit" className="mt-4">Add Document</Button>
        </form>
      </div>
    </div>
  );
};

export default AddDocument;