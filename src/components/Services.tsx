import React from 'react';
import { BrainCircuit, Bot, Cpu, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-navy-800/50 backdrop-blur-lg p-10 transition-all duration-300 hover:bg-navy-700/50 shadow-lg shadow-purple-500/20 group">
      <div className="text-purple-400 mb-6">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold font-montserrat mb-4 text-white">{title}</h3>
      <p className="text-sm md:text-base text-gray-300 leading-relaxed font-open">{description}</p>
      <div className="mt-6 pt-6 border-t border-white/10">
        <Link 
          to="/services" 
          className="inline-flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-300"
        >
          <span>Learn more</span>
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <BrainCircuit size={32} strokeWidth={1.5} />,
      title: "Machine Learning Solutions",
      description: "Custom ML models designed for your specific business needs, from predictive analytics to computer vision systems."
    },
    {
      icon: <Bot size={32} strokeWidth={1.5} />,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants that understand context and provide personalized user experiences."
    },
    {
      icon: <Workflow size={32} strokeWidth={1.5} />,
      title: "Workflow Automation",
      description: "End-to-end automation solutions that streamline your business processes and eliminate repetitive tasks."
    },
    {
      icon: <Cpu size={32} strokeWidth={1.5} />,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing software and business infrastructure."
    }
  ];

  return (
    <section id="services" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-6 text-white">Our Services</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
                We build intelligent solutions that help businesses automate tasks, 
                gain insights from data, and create exceptional user experiences.
              </p>
            </div>
            <Link
              to="/services"
              className="w-full md:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 text-center shadow-lg shadow-purple-500/20"
            >
              Explore more
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;