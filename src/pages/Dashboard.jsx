import { useState } from 'react';
import DashboardLayout from '../Components/Dashboard/Layout/DashboardLayout';
import Overview from './Dashboard/Overview';
import AddDocument from './Dashboard/AddDocument';
import YourDocuments from './Dashboard/YourDocuments';
import dashboardRedictHandler from '../handlers/dashboardRedictHandler';

const Dashboard = () => {
  const [activePage, setActivePage] = useState('overview');
  
  dashboardRedictHandler();

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview />;
      case 'add':
        return <AddDocument />;
      case 'documents':
        return <YourDocuments />;
      default:
        return <Overview />;
    }
  };

  return (
    <DashboardLayout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </DashboardLayout>
  );
};

export default Dashboard;