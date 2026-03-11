import React, { useState, useEffect, createContext } from "react";
import authUserCheck from "../utils/checkAuth";

export const UserDataContext = createContext();

const DashboardUserContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const auth = await authUserCheck();
        setCurrentUser(auth);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const user = currentUser;

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="flex flex-col items-center space-y-4">

          <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

          <p className="text-white text-lg font-semibold animate-pulse">
            Loading...
          </p>

        </div>
      </div>
    );
  }

  return (
    <UserDataContext.Provider value={user}>
      {children}
    </UserDataContext.Provider>
  );
};

export default DashboardUserContext;