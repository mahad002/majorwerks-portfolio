import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-navy-900 z-50 flex items-center justify-center min-h-screen w-full">
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Background blur elements */}
        <div className="absolute w-96 h-96 bg-indigo-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-violet-500/30 rounded-full filter blur-3xl animate-pulse delay-300"></div>

        {/* Loader Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center justify-center z-10"
        >
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            MajorWerks
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Loader);
