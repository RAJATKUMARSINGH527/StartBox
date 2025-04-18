import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from "../components/Hero"
import Services from '../components/Services';
import Partners from '../components/Partners';
import Resources from '../components/Resources';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'StartBox | Built to scale all private funds';
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <Hero />
      <Services />
      <Partners />
      <Resources />
      <Footer />
    </div>
  );
};

export default Home;