
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="zyter-container flex justify-between items-center py-4">
        <div className="flex-shrink-0">
          <Link to="/">
            <img 
              src="https://zytertrucare.b-cdn.net/wp-content/uploads/2021/07/zyter-trucare-color-1-2.png" 
              alt="Zyter Logo" 
              className="h-8"
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-zyter-darkgray hover:text-zyter-blue focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Solutions</Link>
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Customers</Link>
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Company</Link>
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Career</Link>
            <Link to="/" className="text-zyter-darkgray hover:text-zyter-blue font-medium">Learning</Link>
            <Link to="/" className="zyter-btn">Contact Us</Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link to="/" className="block px-3 py-2 text-zyter-darkgray hover:text-zyter-blue font-medium">Solutions</Link>
            <Link to="/" className="block px-3 py-2 text-zyter-darkgray hover:text-zyter-blue font-medium">Customers</Link>
            <Link to="/" className="block px-3 py-2 text-zyter-darkgray hover:text-zyter-blue font-medium">Company</Link>
            <Link to="/" className="block px-3 py-2 text-zyter-darkgray hover:text-zyter-blue font-medium">Career</Link>
            <Link to="/" className="block px-3 py-2 text-zyter-darkgray hover:text-zyter-blue font-medium">Learning</Link>
            <Link to="/" className="block px-3 py-2 text-zyter-blue font-medium border-t border-gray-200 pt-4 mt-2">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
