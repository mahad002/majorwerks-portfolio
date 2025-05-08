import React, { memo, useMemo } from 'react';
import { BrainCircuit, Bot, Cpu, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ icon, title, description }) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-lg"></div>
      </div>
      <div className="relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-lg border border-white/5">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative p-2">
            <div className="absolute inset-0 bg-indigo-500/10 rounded-full filter blur-md transform rotate-45"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full transform -rotate-12"></div>
            <div className="relative p-2 bg-navy-800/50 backdrop-blur-sm rounded-xl">
            <div className="text-indigo-400">
              {icon}
            </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed font-open mb-8">{description}</p>
          
        <Link 
          to="/services" 
          className="inline-flex items-center text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors duration-300 relative"
        >
          <span className="relative z-10">Learn more</span>
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </Link>
      </div>
    </div>
  );
});

const Services: React.FC = () => {
  const services = useMemo(() => [
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
  ], []);

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
              className="w-full md:w-auto bg-gradient-primary text-white px-8 py-4 rounded-lg transition-all duration-300 text-center hover:opacity-90"
            >
              Explore more
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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