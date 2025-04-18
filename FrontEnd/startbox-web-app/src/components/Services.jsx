import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, image, description, link }) => {
  return (
    <div className="col-span-1">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="relative rounded-lg overflow-hidden bg-gray-800 aspect-square group">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:opacity-80 transition" />
        <Link to={link} className="absolute bottom-4 right-4 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition">
          <ArrowRight size={16} />
        </Link>
      </div>
      <p className="mt-4 text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Venture Funds',
      image: 'https://www.angellist.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq8bht0jl%2Fproduction%2F9a7619aad7a0eb9e27f58b89ff4349720875353e-864x1151.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75',
      description: 'Raise capital, close deals, and manage your portfolio — all from a single platform.',
      link: '/venture-funds'
    },
    {
      title: 'SPVs',
      image: 'https://www.angellist.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq8bht0jl%2Fproduction%2F2292826a63bbba13f1d98cfcb8e3b9b8a7f937b0-1480x2000.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75',
      description: 'Raise privately on a deal-by-deal basis and leverage the StartBox Capital Network.',
      link: '/spvs'
    },
    {
      title: 'Scout Funds',
      image: 'https://www.angellist.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq8bht0jl%2Fproduction%2F31f7a8ae0a3b89004622912f32ff6bf5a6b135ff-1480x2000.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75',
      description: 'Eliminate the heavy operational burden by launching or scaling your scout program.',
      link: '/scout-funds'
    },
    {
      title: 'Digital Subscriptions',
      image: 'https://www.angellist.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq8bht0jl%2Fproduction%2F231a71aafbef445f1f288a4af09ab3478ce36adf-864x1151.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75',
      description: 'Replace subscription paperwork with flexible digital workflows that are custom to each LP.',
      link: '/digital-subscriptions'
    }
  ];

  return (
    <div className="px-6 md:px-12 py-16 bg-gray-950">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
