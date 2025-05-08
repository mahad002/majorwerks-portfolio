import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input');

      setIsPointer(isClickable);
      setScale(isClickable ? 1.5 : 1);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: isHidden ? 0 : 1,
          scale: scale,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
      >
        <div className={`w-full h-full rounded-full bg-white ${isPointer ? 'mix-blend-difference' : ''}`} />
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 10,
          mass: 0.2
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>
    </>
  );
};

export default Cursor;