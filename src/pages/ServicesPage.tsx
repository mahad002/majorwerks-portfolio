import React, { useEffect } from 'react';
import { BrainCircuit, Bot, Workflow, Cpu, Code, Database, Cloud, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="text-neutral-800 mb-6 w-12 h-12 flex items-center justify-center bg-neutral-100 rounded-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold font-montserrat mb-4">{title}</h3>
      <p className="text-neutral-600 leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-neutral-500">
            <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
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
  ];

  return (
    <div className="pt-32 pb-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Link 
              to="/" 
              className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors duration-300 mb-8 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl font-bold font-montserrat mb-6">Our Services</h1>
            <p className="text-xl text-neutral-600 max-w-3xl">
              We offer a comprehensive range of AI and technology services to help businesses 
              innovate and grow in the digital age. Explore our services below to learn how 
              we can help transform your business.
            </p>
          </div>
          
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
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold font-montserrat mb-6">Ready to Get Started?</h2>
            <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can help you achieve your business goals with our 
              innovative solutions.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;