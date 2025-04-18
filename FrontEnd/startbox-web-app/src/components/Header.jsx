import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="px-6 md:px-12 py-4 flex justify-between items-center bg-gray-950 text-white sticky top-0 z-50">
      <div className="text-2xl font-bold">
        <Link to="/">StartBox</Link>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="block md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          )}
        </svg>
      </button>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <button 
            className="flex items-center space-x-1"
            onClick={() => {
              setIsProductsOpen(!isProductsOpen);
              setIsSolutionsOpen(false);
              setIsResourcesOpen(false);
            }}
          >
            <span>Products</span>
            <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isProductsOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link to="/venture-funds" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">Venture Funds</Link>
                <Link to="/spvs" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">SPVs</Link>
                <Link to="/scout-funds" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">Scout Funds</Link>
                <Link to="/digital-subscriptions" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">Digital Subscriptions</Link>
              </div>
            </div>
          )}
        </div>

        <div className="relative group">
          <button 
            className="flex items-center space-x-1"
            onClick={() => {
              setIsSolutionsOpen(!isSolutionsOpen);
              setIsProductsOpen(false);
              setIsResourcesOpen(false);
            }}
          >
            <span>Solutions</span>
            <svg className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isSolutionsOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link to="/for-investors" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">For Investors</Link>
                <Link to="/for-startups" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">For Startups</Link>
                <Link to="/for-fund-managers" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">For Fund Managers</Link>
              </div>
            </div>
          )}
        </div>

        <Link to="/pricing" className="hover:text-indigo-300">Pricing</Link>

        <div className="relative group">
          <button 
            className="flex items-center space-x-1"
            onClick={() => {
              setIsResourcesOpen(!isResourcesOpen);
              setIsProductsOpen(false);
              setIsSolutionsOpen(false);
            }}
          >
            <span>Resources</span>
            <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isResourcesOpen && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link to="/blog" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">Blog</Link>
                <Link to="/case-studies" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">Case Studies</Link>
                <Link to="/help-center" className="block px-4 py-2 text-sm hover:bg-gray-700" role="menuitem">Help Center</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/signin" className="text-white hover:text-indigo-300">Sign in</Link>
        <Link to="/contact" className="bg-indigo-200 text-indigo-900 py-2 px-4 rounded-md hover:bg-indigo-300 transition">Contact sales</Link>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <span>Products</span>
              <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {isProductsOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                <Link to="/venture-funds" className="text-gray-300 hover:text-white">Venture Funds</Link>
                <Link to="/spvs" className="text-gray-300 hover:text-white">SPVs</Link>
                <Link to="/scout-funds" className="text-gray-300 hover:text-white">Scout Funds</Link>
                <Link to="/digital-subscriptions" className="text-gray-300 hover:text-white">Digital Subscriptions</Link>
              </div>
            )}
            
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              <span>Solutions</span>
              <svg className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {isSolutionsOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                <Link to="/for-investors" className="text-gray-300 hover:text-white">For Investors</Link>
                <Link to="/for-startups" className="text-gray-300 hover:text-white">For Startups</Link>
                <Link to="/for-fund-managers" className="text-gray-300 hover:text-white">For Fund Managers</Link>
              </div>
            )}
            
            <Link to="/pricing" className="hover:text-indigo-300">Pricing</Link>
            
            <button 
              className="flex items-center justify-between w-full"
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            >
              <span>Resources</span>
              <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {isResourcesOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
                <Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link>
                <Link to="/help-center" className="text-gray-300 hover:text-white">Help Center</Link>
              </div>
            )}
            
            <hr className="border-gray-700" />
            
            <Link to="/signin" className="text-white hover:text-indigo-300">Sign in</Link>
            <Link to="/contact" className="bg-indigo-200 text-indigo-900 py-2 px-4 rounded-md text-center hover:bg-indigo-300 transition">Contact sales</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;