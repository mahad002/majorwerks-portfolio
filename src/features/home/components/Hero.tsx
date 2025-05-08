import React from 'react';
import { motion } from 'framer-motion';
import TypewriterEffect from '../../../shared/components/TypewriterEffect';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-purple-900/50 to-navy-900/90"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">MajorWerks</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            <TypewriterEffect
              text="Your trusted partner in innovation"
              delay={100}
            />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 