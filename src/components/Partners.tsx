import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-montserrat mb-6 text-white">Associated Partners</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver exceptional solutions.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://www.inspirovix.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 shadow-lg shadow-purple-500/20"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white transition-colors duration-500">
                  Inspirovix
                </h3>
                <ArrowUpRight 
                  size={24}
                  className="text-purple-400 group-hover:text-white transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500"
                />
              </div>
              <p className="mt-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-500">
                Innovative Technology Solutions Partner
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;