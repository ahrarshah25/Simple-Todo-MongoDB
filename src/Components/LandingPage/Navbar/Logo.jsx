import React from "react"
import { Leaf } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Leaf className="h-8 w-8 text-green-500" />
      <span className="text-xl font-bold text-white">MongoDB</span>
    </div>
  );
};

export default Logo;