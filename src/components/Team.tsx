import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = memo(({ name, role, description, image, social }) => {
  const socialIcons = useMemo(() => [
    { icon: <Github size={20} />, href: social?.github, label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: social?.linkedin, label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: social?.twitter, label: 'Twitter' },
    { icon: <Mail size={20} />, href: social?.email, label: 'Email' }
  ], [social]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative bg-navy-800/30 backdrop-blur-lg p-6 rounded-xl border border-white/5 overflow-hidden">
        <div className="mb-6 relative">
          <div className="aspect-square w-48 mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{name.charAt(0)}</span>
                </div>
              </div>
            )}
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"></div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <p className="text-indigo-400 text-sm mb-4">{role}</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">{description}</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialIcons.map((item, index) => (
              item.href && (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.label}
                >
                  {item.icon}
                </motion.a>
              )
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

TeamMember.displayName = 'TeamMember';

const Team: React.FC = () => {
  const teamMembers = useMemo(() => [
    {
      name: "Ehtisham",
      role: "Outreach & Finance",
      description: "Managing financial operations and business outreach initiatives",
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:ehtisham@majorwerks.com"
      }
    },
    {
      name: "Awais Khalid",
      role: "Business Development",
      description: "Spearheading outreach strategies and lead generation",
      social: {
        linkedin: "https://linkedin.com",
        email: "mailto:awais@majorwerks.com"
      }
    },
    {
      name: "Mahad Sheikh",
      role: "Technical & Marketing",
      description: "Leading technical development and marketing strategies",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:mahad@majorwerks.com"
      }
    }
  ], []);

  return (
    <section id="team" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Creative Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the talented individuals behind our innovative solutions and creative designs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Team);