import React from "react";
import Logo from '../Navbar/Logo';
import Tabs from '../Navbar/Tabs';
import CopyRight from './CopyRight';
import Social from './Social';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <Tabs className="flex-wrap justify-center" />
          <Social />
        </div>
        <div className="mt-8 text-center">
          <CopyRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;