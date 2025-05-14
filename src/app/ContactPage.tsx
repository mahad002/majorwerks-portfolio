import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Blog from '../components/Blog';

const ContactPage: React.FC = () => {
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
          
          <Contact />
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;