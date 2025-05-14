import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/about" className="group relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-lg border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">About Us</h3>
                <p className="text-gray-300 mb-6">Learn more about our mission, vision, and journey.</p>
                <div className="flex items-center text-indigo-400 group-hover:text-indigo-300">
                  <span>Explore</span>
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link to="/team" className="group relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-lg border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
                <p className="text-gray-300 mb-6">Meet the talented individuals behind our success.</p>
                <div className="flex items-center text-indigo-400 group-hover:text-indigo-300">
                  <span>Meet us</span>
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link to="/contact" className="group relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-lg border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">Contact</h3>
                <p className="text-gray-300 mb-6">Get in touch with us for any inquiries.</p>
                <div className="flex items-center text-indigo-400 group-hover:text-indigo-300">
                  <span>Contact us</span>
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;