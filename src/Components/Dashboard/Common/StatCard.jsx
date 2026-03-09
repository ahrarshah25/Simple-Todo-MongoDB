const StatCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
        </div>
        <div className="p-3 bg-green-600/10 rounded-lg">
          <Icon className="h-6 w-6 text-green-500" />
        </div>
      </div>
      {trend && (
        <p className="text-sm text-green-400 mt-4">
          {trend} from last month
        </p>
      )}
    </div>
  );
};

export default StatCard;