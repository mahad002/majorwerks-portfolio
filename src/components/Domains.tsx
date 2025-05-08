import React, { memo, useMemo } from 'react';
import { ArrowRight, BrainCircuit, Globe, Cog, Database, FlaskRound as Flask, Users, Shield, ExternalLink } from 'lucide-react';

interface Domain {
  name: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

const domains: Domain[] = [
  {
    name: "AI & ML",
    icon: <BrainCircuit size={24} />,
    description: "Advanced machine learning solutions and AI integration",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
  },
  {
    name: "Web Development",
    icon: <Globe size={24} />,
    description: "Modern web applications and progressive platforms",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
  },
  {
    name: "Automation",
    icon: <Cog size={24} />,
    description: "Streamlined workflow and process automation",
    image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
  },
  {
    name: "Platform Engineering",
    icon: <Database size={24} />,
    description: "Scalable and robust platform solutions",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
  },
  {
    name: "Data Science",
    icon: <Flask size={24} />,
    description: "Data analytics and insights generation",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
  },
  {
    name: "Agile & PM",
    icon: <Users size={24} />,
    description: "Efficient project management and delivery",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    name: "Quality Assurance",
    icon: <Shield size={24} />,
    description: "Comprehensive testing and quality control",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  }
];

const DomainCard: React.FC<{ domain: Domain; index: number }> = memo(({ domain, index }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={domain.image}
            alt={domain.name}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/70 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
          
          <div className="relative flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-500/10 backdrop-blur-sm rounded-xl">
            <div className="text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
              {domain.icon}
            </div>
          </div>
            <h3 className="text-xl font-bold text-white">{domain.name}</h3>
          </div>
          
          <div className="relative">
            <p className="text-gray-300 text-sm mb-4">{domain.description}</p>
            <div className="flex items-center text-indigo-400 text-sm font-medium">
              <span>Learn more</span>
              <ExternalLink size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Domains: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across multiple domains, powered by cutting-edge technology and industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <DomainCard key={index} domain={domain} index={index} />
            ))}
          </div>

          <div 
            className="mt-16 text-center"
          >
            <button className="bg-gradient-primary px-8 py-4 rounded-xl text-white font-medium hover:opacity-90 transition-all duration-300 group">
              <span>Explore All Services</span>
              <ArrowRight size={20} className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;