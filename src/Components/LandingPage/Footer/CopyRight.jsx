import React from "react";

const CopyRight = () => {
  const year = new Date().getFullYear();
  return (
    <p className="text-gray-400 text-sm">
      &copy; {year} MongoDB. All rights reserved.
    </p>
  );
};

export default CopyRight;