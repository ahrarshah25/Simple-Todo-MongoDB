import React from "react";
import { Database } from 'lucide-react';

const RightImage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-800 rounded-lg p-8 border border-gray-700">
      <Database className="h-40 w-40 text-green-500" />
    </div>
  );
};

export default RightImage;