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
    <div className="pt-32 pb-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <Link 
              to="/" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 mb-8 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl font-bold font-montserrat mb-6 text-white">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
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
            <h2 className="text-3xl font-bold font-montserrat mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can help you achieve your business goals with our 
              innovative solutions.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Screenshot Showcase */}
        <div className="relative mt-32 mb-24 overflow-hidden rounded-3xl bg-navy-800/30 backdrop-blur-lg border border-white/5">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-50"></div>
          </div>
          
          <div className="relative px-8 py-12 md:p-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 text-white">Our Latest Work</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See how we've helped businesses transform their operations with AI-powered solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
                <img 
                  src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg" 
                  alt="AI Dashboard Interface" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">AI-Powered Analytics Dashboard</h3>
                  <p className="text-gray-300">
                    Custom-built dashboard providing real-time insights and predictive analytics.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Book Call Section */}
        <BookCall />
      </div>
    </div>
  );
};

export default ServicesPage;