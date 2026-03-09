import React from "react"


const Button = ({ children, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;