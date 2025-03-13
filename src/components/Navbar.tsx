
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="zyter-container flex justify-between items-center py-4">
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src="https://zytertrucare.b-cdn.net/wp-content/uploads/2021/07/ZTC_LOGO_FINAL.png" 
              alt="Zyter Logo" 
              className="h-8"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Home</Link>
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Products</Link>
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Solutions</Link>
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Resources</Link>
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">About Us</Link>
            <Link to="/" className="zyter-btn">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
