// src/components/Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="px-6 md:px-12 py-16 md:py-24 bg-gray-950">
      <Link to="/year-review" className="inline-flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full mb-8 hover:bg-gray-700 transition">
        <span>Explore our 2024 Year in Review</span>
        <ArrowRight size={16} />
      </Link>

      <div className="max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-light text-indigo-200 mb-8">
          Built to scale all private funds
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          StartBox provides investors and innovators with the tools to grow.
        </p>
        <Link to="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded hover:bg-gray-200 transition">
          Contact sales
        </Link>
      </div>
    </div>
  );
};

export default Hero;