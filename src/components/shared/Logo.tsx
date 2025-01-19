import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center text-2xl font-bold mr-8 hover:border border-transparent hover:border-white p-2 rounded">
      <ShoppingCart className="w-8 h-8 mr-1" />
      <span>amazon</span>
    </a>
  );
};

export default Logo;