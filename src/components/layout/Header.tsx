import React from 'react';
import { Search, ShoppingCart, Menu, ChevronDown, Divide } from 'lucide-react';
import Logo from '../shared/Logo';

const Header = () => {
  return (
    <header className="bg-[#131921] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Logo />
          
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <div className="flex items-center bg-gray-100 text-black px-3 rounded-l-md cursor-pointer hover:bg-gray-200 transition-colors">
                All <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <input
                type="text"
                className="w-full px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#febd69]"
                placeholder="Search Amazon"
              />
              <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 rounded-r-md transition-colors">
                <Search className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
          
          <nav className="flex items-center ml-8 space-x-6">
            <button className="hover:border border-transparent hover:border-white p-2 rounded">
              <div className="text-xs">Hello, sign in</div>
              <div className="font-bold flex items-center">
                Account & Lists <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </button>
            
            <button className="hover:border border-transparent hover:border-white p-2 rounded">
              <div className="text-xs">Returns</div>
              <div className="font-bold">& Orders</div>
            </button>
            
            <button className="flex items-center hover:border border-transparent hover:border-white p-2 rounded">
              <div className="relative">
                <ShoppingCart className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 bg-[#febd69] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  1
                </span>
              </div>
              <span className="font-bold ml-1">Cart</span>
            </button>
          </nav>
        </div>
        
        <nav className="flex items-right h-10 bg-[#232f3e] -mx-4 px-4">
          <button className="flex items-right hover:border border-transparent hover:border-white p-1 rounded">
            <Menu className="w-6 h-6 mr-2" />
            All
          </button>
          <div className="flex space-x-4 ml-6">
            {[ 'Today\'s Deals','MX Players','Mobiles','Electronics','Prime','Home & Kitchen','Amazon Pay','Sell' ,'Best Sellers','Customer Service', 'Registry', 'Gift Cards',].map((item) => (
              <a 
                key={item}
                href="#" 
                className="hover:border border-transparent hover:border-white p-1 rounded"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;