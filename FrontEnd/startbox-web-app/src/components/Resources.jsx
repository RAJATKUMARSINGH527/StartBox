import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ image, category, title, date, readTime, link }) => {
  return (
    <div className="col-span-1">
      <Link to={link} className="block group">
        <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video mb-4 group-hover:opacity-80 transition">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <span className="text-gray-400 text-sm">{category}</span>
        <h3 className="text-xl font-medium my-2 group-hover:text-indigo-300 transition">{title}</h3>
        <p className="text-gray-400 text-sm">{date} — {readTime} MIN READ</p>
      </Link>
    </div>
  );
};

const Resources = () => {
  const articles = [
    {
      image: 'https://www.angellist.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq8bht0jl%2Fproduction%2F2219c27f06824c0cadae600c7d086a9e1f120588-2400x1200.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75',
      category: 'Case Studies',
      title: 'Breaking the Mold: The Power of StartBox\'s Operator-Led Model',
      date: 'MAR 26, 2025',
      readTime: '9',
      link: '/blog/breaking-the-mold'
    },
    {
      image: 'https://www.angellist.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq8bht0jl%2Fproduction%2F6c8fe373402854cfaf1abded67fda49ba9f783bb-1200x1200.jpg%3Ffit%3Dmax%26auto%3Dformat&w=1200&q=75',
      category: 'Data',
      title: 'The State of U.S. Early-Stage Venture & Startups: 2024',
      date: 'JAN 28, 2025',
      readTime: '2',
      link: '/blog/state-of-us-venture-2024'
    },
    {
      image: 'https://www.angellist.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq8bht0jl%2Fproduction%2Ff99ead24cc7ceb5c29d1115f9cc7b6c7a166bde2-1200x1200.jpg%3Ffit%3Dmax%26auto%3Dformat&w=256&q=75',
      category: 'Product News',
      title: 'Q4 Releases & Product Updates',
      date: 'JAN 24, 2025',
      readTime: '4',
      link: '/blog/q4-releases'
    },
    {
      image: 'https://www.angellist.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fq8bht0jl%2Fproduction%2F8a26ffc91da57bfe3fb8c2b411bc39c5bd4d292c-1200x1200.jpg%3Ffit%3Dmax%26auto%3Dformat&w=828&q=75',
      category: 'Product News',
      title: 'Q3 Releases & Product Updates',
      date: 'NOV 12, 2024',
      readTime: '7',
      link: '/blog/q3-releases'
    }
  ];

  return (
    <div className="px-6 md:px-12 py-16 bg-gray-950 border-t border-gray-800">
      <h3 className="text-gray-400 mb-4">Resources</h3>
      <h2 className="text-3xl md:text-5xl font-light mb-12">Latest articles</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default Resources;