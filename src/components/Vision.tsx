import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';

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

const Vision: React.FC = () => {
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
    <div className="pt-32 pb-24 bg-gradient-dark text-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300 mb-8 inline-block"
          >
            ← Back to Home
          </Link>

          {/* Vision Section */}
          <section className="mb-24">
            <h1 className="text-5xl font-bold font-montserrat mb-12">Our Vision</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div className="group relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-3xl hover:bg-navy-700/40 transition-all duration-500 border border-white/5">
                  <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      We aim to make a significant impact in future tech, and build solutions 
                      which can be used by the people around us. Our goal is to democratize 
                      AI and make it accessible to businesses of all sizes.
                    </p>
                  </div>
                </div>
                
                <div className="group relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-3xl hover:bg-navy-700/40 transition-all duration-500 border border-white/5">
                  <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Founded in Nov 2024 in collaboration with Inspirovix, MajorWerks was established by three young entrepreneurs with a bold vision: to automate every possible business process. Our founders recognized the transformative potential of automation in enhancing business production, quality, and consistency. We've quickly established ourselves as an innovative force in the AI industry, specializing in creating intelligent solutions that transform how businesses operate, focusing on practical applications of cutting-edge technology.
                    </p>
                  </div>
                </div>

                <div className="group relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-3xl hover:bg-navy-700/40 transition-all duration-500 border border-white/5">
                  <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Innovation, integrity, and impact drive everything we do. We believe in 
                      creating solutions that not only solve today's challenges but also 
                      anticipate tomorrow's needs. Our commitment to automation excellence 
                      helps businesses achieve unprecedented levels of efficiency and quality.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-3xl transform rotate-12 transition-all duration-500 hover:rotate-6"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-500/10 rounded-2xl transform -rotate-12 transition-all duration-500 hover:-rotate-6"></div>

                <div className="relative w-full max-w-md aspect-square group bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-lg rounded-3xl p-12 transform rotate-3 transition-all duration-500 hover:rotate-6 shadow-lg shadow-purple-500/30">
                <div className="absolute inset-0 bg-white/5 rounded-3xl transform -rotate-3 transition-all duration-500 group-hover:-rotate-6"></div>
                <div className="relative z-10 h-full mt-6 mb-6 flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Innovation Through Intelligence</h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  We harness AI and automation to transform businesses, making operations more efficient, consistent, and high-quality no matter the size.
                  </p>
                  <div className="pt-4">
                    <span className="inline-block text-purple-400 text-sm font-medium tracking-wider uppercase">Est. Nov 2024</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-4xl font-bold font-montserrat mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-8 py-4 rounded-full transition-all duration-300 group hover:opacity-90"
              >
                <span>Explore our services</span>
                <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vision; 