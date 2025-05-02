import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-montserrat mb-6">Associated Partners</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Collaborating with Technical Partners for Enhanced Services.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="https://www.inspirovix.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-neutral-100 p-8 rounded-3xl hover:bg-neutral-800 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 group-hover:text-white transition-colors duration-500">
                  Inspirovix
                </h3>
                <ArrowUpRight 
                  size={24}
                  className="text-neutral-400 group-hover:text-white transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500"
                />
              </div>
              <p className="mt-2 text-neutral-600 group-hover:text-neutral-300 transition-colors duration-500">
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