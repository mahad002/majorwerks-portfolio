import React, { useRef, useEffect } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import AudioSpectrum from './AudioSpectrum';

const Hero: React.FC = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate position relative to the center of the screen
      const xPos = (clientX / windowWidth - 0.5) * 30;
      const yPos = (clientY / windowHeight - 0.5) * 30;
      
      // Apply subtle parallax effect to the blob
      blobRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-navy-900 via-purple-900/50 to-navy-900 flex flex-col justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-24 left-24 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-500/20" />
      
      {/* Audio Spectrum Container */}
      <div className="absolute inset-0 z-10">
        <AudioSpectrum scale={1} position={{ x: -22, y: 0, z: 90 }} />
        <AudioSpectrum scale={0.75} position={{ x: 22, y: 0, z: 90 }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto text-left md:text-center">
          <h1 className="relative text-3xl md:text-6xl lg:text-7xl font-montserrat text-white leading-tight tracking-tight mb-10">
            We create <span className="font-bold">your <span className="relative">ease<span className="absolute -bottom-1 left-0 w-full h-1 bg-purple-500"></span></span></span><span className="font-bold relative">.<span className="absolute -bottom-1 left-0 w-full h-1 bg-purple-500"></span></span>
          </h1>

          <div className="flex flex-wrap items-center justify-start md:justify-center gap-4 md:gap-8 mt-8">
            <a 
              href="#linkedin" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2"
            >
              <Linkedin size={24} strokeWidth={1.5} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href="#instagram" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2"
            >
              <Instagram size={24} strokeWidth={1.5} />
              <span className="font-medium">Instagram</span>
            </a>
            <a 
              href="#tiktok" 
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="font-medium">TikTok</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <a 
          href="#about"
          className="inline-block text-gray-300 text-sm font-medium animate-bounce"
        >
          Scroll down
          <div className="mx-auto mt-2 w-0.5 h-6 bg-purple-400"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;