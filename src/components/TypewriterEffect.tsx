import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypewriterEffect = memo(({ phrases, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000 }: TypewriterEffectProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        if (currentText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <AnimatePresence mode="wait">
      <div className="relative h-20 flex items-center justify-center overflow-hidden">
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <span className="text-1xl md:text-3xl bg-gradient-primary text-transparent bg-clip-text font-bold">
            {currentText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-0.5 h-8 bg-violet-500"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
});

TypewriterEffect.displayName = 'TypewriterEffect';

export default TypewriterEffect;