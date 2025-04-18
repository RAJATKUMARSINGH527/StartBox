import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partners = [
    { name: '4Pines', image: '/api/placeholder/120/40' },
    { name: 'Stover', image: '/api/placeholder/120/40' },
    { name: 'Standish', image: '/api/placeholder/120/40' },
    { name: 'Cornerstone', image: '/api/placeholder/120/40' },
    { name: 'Belltower', image: '/api/placeholder/120/40' }
  ];

  return (
    <div className="px-6 md:px-12 py-16 bg-gray-950 border-t border-gray-800">
      <h2 className="text-2xl md:text-3xl font-light text-center mb-12">
        Better together. StartBox partners with industry leaders.
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {partners.map((partner, index) => (
          <div key={index} className="grayscale opacity-70 hover:opacity-100 transition cursor-pointer">
            <img src={partner.image} alt={partner.name} className="h-10" />
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Link to="/partners" className="inline-flex items-center space-x-2 text-gray-300 bg-gray-800 hover:bg-gray-700 transition px-4 md:px-8 py-3 md:py-4 rounded-full mx-auto">
          <span>Our premier partnership program assembles top professionals to deliver comprehensive expertise & support</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Partners;