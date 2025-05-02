import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    
    if (!cursorDot || !cursorRing) return;
    
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      
      // Position the dot exactly at cursor position
      cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      
      // Position the ring with slight delay for trailing effect
      cursorRing.animate(
        [
          { transform: `translate(${clientX}px, ${clientY}px)` }
        ], 
        { 
          duration: 300, 
          fill: 'forwards',
          easing: 'ease-out'
        }
      );
    });
    
    // Add hover effect for interactive elements
    const handleMouseEnter = () => {
      cursorDot.classList.add('scale-[1.5]');
      cursorRing.classList.add('opacity-0');
    };
    
    const handleMouseLeave = () => {
      cursorDot.classList.remove('scale-[1.5]');
      cursorRing.classList.remove('opacity-0');
    };
    
    // Apply effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      // Cleanup
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  return (
    <>
      {/* Custom cursor elements - hidden on touch devices */}
      <div 
        ref={cursorDotRef}
        className="fixed w-2 h-2 rounded-full bg-neutral-800 z-[9999] pointer-events-none transition-transform duration-100 hidden md:block"
        style={{ transform: 'translate(0, 0)' }}
      />
      <div 
        ref={cursorRingRef}
        className="fixed w-6 h-6 rounded-full border border-neutral-400 z-[9999] pointer-events-none transition-opacity duration-300 hidden md:block"
        style={{ transform: 'translate(0, 0)' }}
      />
    </>
  );
};

export default Cursor;