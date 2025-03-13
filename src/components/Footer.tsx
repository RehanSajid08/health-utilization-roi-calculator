
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zyter-darkgray text-white py-12">
      <div className="zyter-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://www.zyter.com/wp-content/uploads/2022/09/zyter-logo-white.svg" 
              alt="Zyter Logo" 
              className="h-8 mb-4"
            />
            <p className="text-sm text-gray-300 mt-4">
              Zyter delivers a wide range of digital health products for providers, payers and patients that span telehealth, care management and offerings for complete virtual care.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Population Health</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Smart Hospitals</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Virtual Care</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">Remote Patient Monitoring</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">For Providers</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">For Payers</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">For Patients</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm">For Healthcare Systems</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Contact</h4>
            <p className="text-gray-300 text-sm">6865 Flank Drive, Suite 300<br />McLean, VA 22101</p>
            <p className="text-gray-300 text-sm mt-2">1-301-717-5995</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/zyter/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zyter-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://twitter.com/ZyterInc" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zyter-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/ZyterInc/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zyter-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Zyter, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
            <Link to="/" className="text-sm text-gray-400 hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
