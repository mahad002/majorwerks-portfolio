import React from 'react';
import { ArrowRight } from 'lucide-react';

const domains = [
  "AI & ML",
  "Web Development",
  "Automation",
  "Platform Engineering",
  "Data Science",
  "Agile & PM",
  "Quality Assurance"
];

const Domains: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-0">
              Domains of Expertise
            </h2>
            <button className="hidden md:flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group">
              <span>Explore all</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="space-y-4">
            {domains.map((domain, index) => (
              <div 
                key={index}
                className="group bg-navy-900/50 backdrop-blur-lg hover:bg-navy-700/50 px-6 py-4 md:py-5 md:pl-8 md:pr-16 rounded-[50px] transition-all duration-500 cursor-pointer shadow-lg shadow-purple-500/20"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-3xl lg:text-5xl font-medium text-gray-300 group-hover:text-white transition-all duration-500 truncate">
                    {domain}
                  </h3>
                  <ArrowRight 
                    size={20} 
                    className="text-gray-300 group-hover:text-white transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="md:hidden w-full mt-10 flex items-center justify-center space-x-2 text-white hover:text-purple-300 transition-colors duration-300 group bg-white/10 backdrop-blur-lg px-8 py-4 rounded-[50px] shadow-lg shadow-purple-500/20">
            <span>Explore all</span>
            <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Domains;