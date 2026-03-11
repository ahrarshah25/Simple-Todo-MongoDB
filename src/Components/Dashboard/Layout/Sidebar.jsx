import { LayoutDashboard, FilePlus, Files, LogOut } from 'lucide-react';
import { Navigate } from "react-router-dom";
import logout from "../../../api/auth/logout.api";
import Swal from "sweetalert2"

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'add', label: 'Add Document', icon: FilePlus },
    { id: 'documents', label: 'Your Documents', icon: Files },
  ];

  const logoutUser = async () => {
    const res = await logout();
    if(res.data?.success) {
      Swal.fire({
        title: "Logout Successfully",
        text: "Logout Successfully!",
        icon: "success"
      }).then(() => { window.location.href = "/login" })
    }
  }

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">MongoDB</span>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                activePage === item.id
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button onClick={logoutUser} className="w-full flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;