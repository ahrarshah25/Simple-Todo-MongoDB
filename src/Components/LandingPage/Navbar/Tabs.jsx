import React from "react"

const Tabs = ({ className = '' }) => {
  const links = ['Home', 'About', 'Contact', 'Pricing'];
  return (
    <ul className={`flex space-x-6 ${className}`}>
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-gray-300 hover:text-green-400 transition">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;