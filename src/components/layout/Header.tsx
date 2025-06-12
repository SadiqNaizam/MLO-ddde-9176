import React from 'react';

const Header: React.FC = () => {
  console.log('Header component loaded');

  return (
    <header className="w-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white font-sans">
      <div className="container mx-auto px-6 py-24 sm:py-32 md:py-40 lg:py-48 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          Eldarnwand Design System
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 max-w-3xl mx-auto">
          An elegant, scalable, and accessible color system designed for modern user interfaces.
        </p>
      </div>
    </header>
  );
};

export default Header;