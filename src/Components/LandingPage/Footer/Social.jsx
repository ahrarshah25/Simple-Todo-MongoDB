import React from "react";
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Social = () => {
  const socials = [
    { icon: Github, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Facebook, href: '#' },
  ];

  return (
    <div className="flex space-x-4">
      {socials.map(({ icon: Icon, href }, index) => (
        <a
          key={index}
          href={href}
          className="text-gray-400 hover:text-green-500 transition"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default Social;