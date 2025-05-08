import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const LoadingDots: React.FC = () => {
  // Memoize animation variants
  const dotAnimation = useMemo(() => ({
    animate: {
      scale: [1, 1.4, 1],
      opacity: [1, 0.6, 1],
      y: [0, -12, 0]
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  }), []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-navy-900/95 via-navy-800/90 to-navy-900/95 backdrop-blur-3xl z-50 flex items-center justify-center min-h-screen w-full">
      <div className="relative">
        {/* Subtle background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse delay-300" />
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center space-x-4">
          <motion.div
            {...dotAnimation}
            transition={{ ...dotAnimation.transition, delay: 0 }}
            className="w-5 h-5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/20"
          />
          <motion.div
            {...dotAnimation}
            transition={{ ...dotAnimation.transition, delay: 0.3 }}
            className="w-5 h-5 bg-violet-500 rounded-full shadow-lg shadow-violet-500/20"
          />
          <motion.div
            {...dotAnimation}
            transition={{ ...dotAnimation.transition, delay: 0.6 }}
            className="w-5 h-5 bg-fuchsia-500 rounded-full shadow-lg shadow-fuchsia-500/20"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(LoadingDots); 