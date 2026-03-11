import { Bell, User } from "lucide-react";
import { useContext } from "react";
import { UserDataContext } from "../../../context/DashboardUserContext";

const Header = () => {

  const user = useContext(UserDataContext);
  
  return (
    <header className="bg-gray-800 border-b border-gray-700 h-16 flex items-center justify-end px-6">
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User size={18} className="text-gray-300" />
          </div>
          <span className="text-sm font-medium text-white">{user.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
