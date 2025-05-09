import React, { memo, useMemo, useState } from 'react';
import { BrainCircuit, Bot, Cpu, Workflow, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = memo(({ icon, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-lg"></div>
      </div>
      <div className="relative bg-navy-800/30 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-lg border border-white/5 flex flex-col">
        <div 
          className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4 cursor-pointer md:cursor-default"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="relative p-1.5 sm:p-2 flex-shrink-0">
            <div className="absolute inset-0 bg-indigo-500/10 rounded-full filter blur-md transform rotate-45"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-full transform -rotate-12"></div>
            <div className="relative p-1.5 sm:p-2 bg-navy-800/50 backdrop-blur-sm rounded-xl">
              <div className="text-indigo-400">
                {icon}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
              <button 
                className="md:hidden text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
              >
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0 md:max-h-96'}`}>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-open">{description}</p>
              <div className={`pt-3 ${isExpanded ? '' : 'hidden'} md:block`}>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-sm sm:text-base text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors duration-300 relative"
                >
                  <span className="relative z-10">Learn more</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Services: React.FC = () => {
  const services = useMemo(() => [
    {
      icon: <BrainCircuit size={24} strokeWidth={1.5} />,
      title: "Machine Learning Solutions",
      description: "Custom ML models designed for your specific business needs, from predictive analytics to computer vision systems."
    },
    {
      icon: <Bot size={24} strokeWidth={1.5} />,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants that understand context and provide personalized user experiences."
    },
    {
      icon: <Workflow size={24} strokeWidth={1.5} />,
      title: "Workflow Automation",
      description: "End-to-end automation solutions that streamline your business processes and eliminate repetitive tasks."
    },
    {
      icon: <Cpu size={24} strokeWidth={1.5} />,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing software and business infrastructure."
    }
  ], []);

  return (
    <section id="services" className="py-16 sm:py-24 bg-navy-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-3 sm:mb-6 text-white">Our Services</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl">
                We build intelligent solutions that help businesses automate tasks, 
                gain insights from data, and create exceptional user experiences.
              </p>
            </div>
            <Link
              to="/services"
              className="w-full md:w-auto bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-center hover:opacity-90 text-sm sm:text-base mt-4 md:mt-0"
            >
              Explore more
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
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