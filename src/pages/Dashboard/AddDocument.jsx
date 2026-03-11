import { useState, useContext } from 'react';
import Input from '../../Components/Auth/Input';
import Button from '../../Components/LandingPage/Navbar/Button';
import { UserDataContext } from "../../context/DashboardUserContext";
import Swal from "sweetalert2";
import addDoc from '../../api/dashboard/addDocument.api';

const AddDocument = () => {
  const [title, setTitle] = useState('');
  const user = useContext(UserDataContext);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title) {
      Swal.fire({
        title: "Empty Fields",
        text: "Please fill all the fields",
        icon: "error"
      });
      return;
    }
    try {
      const res = await addDoc(user._id, title);
    
      if(res.status === 200) {
        Swal.fire({
          title: "Document Added",
          text: "Document added successfully",
          icon: "success"
        });
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error"
      });
    }
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