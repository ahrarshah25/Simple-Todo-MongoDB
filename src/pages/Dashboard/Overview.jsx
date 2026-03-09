import { FileText, Users, Clock, Activity } from 'lucide-react';
import StatCard from '../../Components/Dashboard/Common/StatCard';
import DataTable from '../../Components/Dashboard/Common/DataTable';

const recentDocs = [
  { id: 1, title: 'Project Proposal', created: '2026-03-01', updated: '2026-03-05' },
  { id: 2, title: 'Meeting Notes', created: '2026-03-02', updated: '2026-03-04' },
  { id: 3, title: 'API Documentation', created: '2026-02-28', updated: '2026-03-03' },
];

const Overview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Welcome back, John!</h1>
        <p className="text-gray-400 mt-1">Here's what's happening with your documents.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Documents"
          value="24"
          icon={FileText}
          trend="+12%"
        />
        <StatCard
          title="Active Collaborators"
          value="6"
          icon={Users}
          trend="+2"
        />
        <StatCard
          title="Recent Updates"
          value="8"
          icon={Clock}
          trend="this week"
        />
        <StatCard
          title="Views"
          value="1,234"
          icon={Activity}
          trend="+23%"
        />
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Documents</h2>
        <DataTable
          documents={recentDocs}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
    </div>
  );
};

export default Overview;