import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=2000&q=80"
        alt="Hero Banner"
        className="w-full h-[600px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
    </div>
  );
};

export default Hero;