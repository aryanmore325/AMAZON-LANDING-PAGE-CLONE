import React from 'react';

const footerLinks = {
  "Get to Know Us": [
    "Careers",
    "Blog",
    "About Amazon",
    "Investor Relations"
  ],
  "Make Money with Us": [
    "Sell products on Amazon",
    "Sell on Amazon Business",
    "Become an Affiliate"
  ],
  "Amazon Payment Products": [
    "Amazon Business Card",
    "Shop with Points",
    "Amazon Currency Converter"
  ],
  "Let Us Help You": [
    "Your Account",
    "Your Orders",
    "Shipping Rates & Policies",
    "Help Center"
  ]
};

const Footer = () => {
  return (
    <footer className="bg-[#232f3e] text-white mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 py-8 text-center text-sm text-gray-400">
          <li><p>Conditions of Use & Sale Privacy Notice Interest-Based Ads</p></li>
          <p>© 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;