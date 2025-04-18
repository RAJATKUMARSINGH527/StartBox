import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    'Get started': [
      { name: 'Sign in', link: '/signin' },
      { name: 'Contact sales', link: '/contact' }
    ],
    'Fund Managers': [
      { name: 'Rolling Funds®', link: '/rolling-funds' },
      { name: 'Venture Funds', link: '/venture-funds' },
      { name: 'Syndicates', link: '/syndicates' },
      { name: 'Networked banking', link: '/networked-banking' },
      { name: 'Scout Funds', link: '/scout-funds' },
      { name: 'StartBox vs. Carta', link: '/startbox-vs-carta' },
      { name: 'Fin (Beta)', link: '/fin-beta' }
    ],
    'Pricing + Returns': [
      { name: 'Pricing', link: '/pricing' },
      { name: 'Fund Cost Calculator', link: '/fund-cost-calculator' },
      { name: 'VC Fund Performance Calculator', link: '/vc-fund-calculator' },
      { name: 'RUV Calculator', link: '/ruv-calculator' }
    ],
    'Startups + Investors': [
      { name: 'Roll Up Vehicles®', link: '/roll-up-vehicles' },
      { name: 'Demo Day Funds', link: '/demo-day-funds' }
    ],
    'Resources': [
      { name: 'Partnerships', link: '/partnerships' },
      { name: 'Blog', link: '/blog' },
      { name: 'Help Center', link: '/help-center' },
      { name: 'Education Center', link: '/education-center' },
      { name: 'About us', link: '/about' },
      { name: 'Careers', link: '/careers' },
      { name: 'Form CRS', link: '/form-crs' }
    ]
  };

  return (
    <footer className="px-6 md:px-12 py-16 bg-gray-950 border-t border-gray-800">
      <div className="mb-12">
        <Link to="/" className="text-3xl md:text-5xl font-semibold">StartBox</Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="col-span-1">
            <h3 className="text-gray-400 mb-4">{category}</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className="hover:text-indigo-300 transition">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 StartBox, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/security" className="hover:text-white">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;