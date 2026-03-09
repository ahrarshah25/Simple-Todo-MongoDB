import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Tabs from './Tabs';
import Button from './Button';
import { Navigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
  
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <Tabs />
            <Button onClick={Navigate("/register")} >Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
         
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-64 bg-gray-900 h-full p-6 shadow-xl">
            <div className="flex flex-col space-y-6">
              <Logo />
              <Tabs className="flex-col space-y-4" />
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;