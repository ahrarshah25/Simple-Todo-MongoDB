import React from "react";
import LeftText from './LeftText';
import RightImage from './RightImage';

const Hero = () => {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <LeftText />
          <RightImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;