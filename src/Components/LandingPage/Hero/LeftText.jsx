import React from "react";
import Button from '../Navbar/Button';

const LeftText = () => {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Lets build the next big thing with{' '}
        <span className="text-green-500">MongoDB</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-md">
        The most popular database for modern applications. Scale your ideas
        with a flexible document model.
      </p>
      <Button className="text-lg px-6 py-3">Start Free</Button>
    </div>
  );
};

export default LeftText;