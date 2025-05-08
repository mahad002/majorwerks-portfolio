import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';
import BookCall from '../components/BookCall';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description }) => {
  return (
    <div className="group bg-navy-800/30 backdrop-blur-lg p-8 rounded-3xl hover:bg-navy-700/40 transition-all duration-500 border border-white/5">
      <div className="mb-6 w-24 h-24 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
        <User size={40} className="text-indigo-400" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold font-montserrat text-white mb-2">{name}</h3>
        <p className="text-gray-300 font-open mb-4">{role}</p>
        <p className="text-gray-400 font-open text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const VisionPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Ehtisham",
      role: "Outreach & Finance Director",
      description: "Managing financial operations and business outreach initiatives"
    },
    {
      name: "Awais Khalid",
      role: "Business Development Director",
      description: "Spearheading outreach strategies and lead generation"
    },
    {
      name: "Mahad Sheikh",
      role: "Technical & Marketing Director",
      description: "Leading technical development, marketing strategies, and advisory services"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Our Vision
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300">
            We envision a future where technology empowers businesses to achieve their full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;