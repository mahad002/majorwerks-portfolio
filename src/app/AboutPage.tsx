import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Domains from '../components/Domains';
import Partners from '../components/Partners';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300 mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          
          <About />
          <Domains />
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;