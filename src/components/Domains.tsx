import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Globe, Cog, Database, FlaskRound as Flask, Users, Shield } from 'lucide-react';

interface Domain {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const domains: Domain[] = [
  {
    name: "AI & ML",
    icon: <BrainCircuit size={24} />,
    description: "Advanced machine learning solutions and AI integration"
  },
  {
    name: "Web Development",
    icon: <Globe size={24} />,
    description: "Modern web applications and progressive platforms"
  },
  {
    name: "Automation",
    icon: <Cog size={24} />,
    description: "Streamlined workflow and process automation"
  },
  {
    name: "Platform Engineering",
    icon: <Database size={24} />,
    description: "Scalable and robust platform solutions"
  },
  {
    name: "Data Science",
    icon: <Flask size={24} />,
    description: "Data analytics and insights generation"
  },
  {
    name: "Agile & PM",
    icon: <Users size={24} />,
    description: "Efficient project management and delivery"
  },
  {
    name: "Quality Assurance",
    icon: <Shield size={24} />,
    description: "Comprehensive testing and quality control"
  }
];

const DomainCard: React.FC<{ domain: Domain; index: number }> = ({ domain, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-navy-800/30 backdrop-blur-lg border border-white/5 p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-navy-700/40">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-all duration-500"></div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-500/10 rounded-xl">
            <div className="text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
              {domain.icon}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{domain.name}</h3>
            <p className="text-gray-400 text-sm">{domain.description}</p>
          </div>
          
          <div className="self-center">
            <ArrowRight 
              size={20}
              className="text-indigo-400 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across multiple domains, powered by cutting-edge technology and industry expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <DomainCard key={index} domain={domain} index={index} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <button className="bg-gradient-primary px-8 py-4 rounded-xl text-white font-medium hover:opacity-90 transition-all duration-300 group">
              <span>Explore All Services</span>
              <ArrowRight size={20} className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Domains;