import React, { useEffect, memo, useMemo } from 'react';
import { BrainCircuit, Bot, Workflow, Cpu, Code, Database, Cloud, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookCall from '../components/BookCall';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
} 

const ServiceCard: React.FC<ServiceCardProps> = memo(({ icon, title, description, features }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:translate-y-[-40%] group-hover:translate-x-[60%] transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:translate-y-[60%] group-hover:-translate-x-[60%] transition-all duration-700"></div>
      </div>
      <div className="relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-lg border border-white/5">
        <div className="text-indigo-400 mb-6 w-12 h-12 flex items-center justify-center bg-indigo-500/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-bold font-montserrat mb-4 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = useMemo(() => [
    {
      icon: <BrainCircuit size={24} />,
      title: "Machine Learning Solutions",
      description: "Custom ML models designed for your specific business needs.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Recommendation Engines"
      ]
    },
    {
      icon: <Bot size={24} />,
      title: "Conversational AI",
      description: "Intelligent chatbots and virtual assistants for enhanced user experience.",
      features: [
        "Context-Aware Responses",
        "Multi-Language Support",
        "Integration with Business Systems",
        "24/7 Customer Support"
      ]
    },
    {
      icon: <Workflow size={24} />,
      title: "Workflow Automation",
      description: "End-to-end automation solutions for business processes.",
      features: [
        "Process Optimization",
        "Task Automation",
        "Integration Services",
        "Custom Workflows"
      ]
    },
    {
      icon: <Cpu size={24} />,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into existing systems.",
      features: [
        "API Development",
        "System Integration",
        "Performance Optimization",
        "Scalable Solutions"
      ]
    },
    {
      icon: <Code size={24} />,
      title: "Custom Development",
      description: "Tailored software solutions for your unique requirements.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Enterprise Software",
        "API Development"
      ]
    },
    {
      icon: <Database size={24} />,
      title: "Data Engineering",
      description: "Comprehensive data solutions for modern businesses.",
      features: [
        "Data Pipeline Development",
        "ETL Processes",
        "Data Warehousing",
        "Real-time Analytics"
      ]
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud Solutions",
      description: "Cloud-native applications and infrastructure management.",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Serverless Architecture",
        "Cloud Optimization"
      ]
    },
    {
      icon: <Shield size={24} />,
      title: "Security Services",
      description: "Robust security solutions for your digital assets.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Security Training"
      ]
    }
  ], []);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;