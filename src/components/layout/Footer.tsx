import React from 'react';

const Footer: React.FC = () => {
  console.log('Footer loaded');

  return (
    <footer className="w-full bg-[#1F2937] py-8">
      <div className="container mx-auto px-4">
        <p className="text-center font-sans text-sm font-normal text-gray-300">
          © 2025 Eldarnwand Design System — Designed for scalability and clarity
        </p>
      </div>
    </footer>
  );
};

export default Footer;