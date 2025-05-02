import React from 'react';
import { User } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description }) => {
  return (
    <div className="group">
      <div className="mb-6 w-24 h-24 mx-auto bg-neutral-200 rounded-full flex items-center justify-center group-hover:bg-neutral-300 transition-colors duration-300">
        <User size={40} className="text-neutral-600" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold font-montserrat text-neutral-800 mb-2">{name}</h3>
        <p className="text-neutral-600 font-open mb-4">{role}</p>
        <p className="text-neutral-500 font-open text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
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

  return (
    <section id="team" className="py-24 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-montserrat mb-6">Our Team</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Meet our leadership team driving innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;