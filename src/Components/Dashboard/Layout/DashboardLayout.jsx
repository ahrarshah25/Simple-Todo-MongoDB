import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children, activePage, setActivePage }) => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;