import React, { useRef, useEffect, useState, memo, useMemo } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import AudioSpectrum from './AudioSpectrum';
import TypewriterEffect from './TypewriterEffect';

const Hero = memo(() => {
  const blobRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const taglines = useMemo(() => [
    "Elevate your business with AI",
    "Transform data into insights",
    "Automate with intelligence",
    "Scale your operations seamlessly",
    "Innovate with cutting-edge tech"
  ], []);
  
  useEffect(() => {
    setIsLoading(false);
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
    <section className="relative min-h-screen bg-gradient-to-b from-navy-900/95 via-navy-800/90 to-navy-900/95 flex flex-col justify-center overflow-hidden backdrop-blur-3xl transition-opacity duration-500" style={{ opacity: isLoading ? 0 : 1 }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>
      
      {/* Audio Spectrum Container */}
      <div className="absolute inset-0 z-10">
        <AudioSpectrum scale={1} position={{ x: -22, y: 0, z: 90 }} />
        <AudioSpectrum scale={0.75} position={{ x: 22, y: 0, z: 90 }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="relative text-2xl md:text-6xl lg:text-7xl font-montserrat text-white leading-tight tracking-tight mb-0">
            Ready to transform your <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-200">business</span>{" "}
            <span className="font-bold relative">
              <span className="relative">
                journey
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-fuchsia-400"></span>
              </span>?
            </span>
          </h1>
          
          <div>
            <TypewriterEffect 
              phrases={taglines}
              typingSpeed={80}
              deletingSpeed={50}
              pauseDuration={2000}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-0">
            <a 
              href="#linkedin" 
              className="text-gray-300 hover:text-violet-300 transition-all duration-300 flex items-center space-x-2 group bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full hover:bg-white/10"
            >
              <div className="w-5 h-5 md:w-6 md:h-6">
                <Linkedin size={20} strokeWidth={1.5} className="w-full h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="hidden md:inline font-medium">LinkedIn</span>
            </a>
            <a 
              href="#instagram" 
              className="text-gray-300 hover:text-violet-300 transition-all duration-300 flex items-center space-x-2 group bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full hover:bg-white/10"
            >
              <div className="w-5 h-5 md:w-6 md:h-6">
                <Instagram size={20} strokeWidth={1.5} className="w-full h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="hidden md:inline font-medium">Instagram</span>
            </a>
            <a 
              href="#tiktok" 
              className="text-gray-300 hover:text-violet-300 transition-all duration-300 flex items-center space-x-2 group bg-white/5 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full hover:bg-white/10"
            >
              <div className="w-5 h-5 md:w-6 md:h-6">
                <svg className="w-full h-full group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <span className="hidden md:inline font-medium">TikTok</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <a 
          href="#about"
          className="inline-block text-gray-300 text-sm font-medium group bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
        >
          Scroll down
          <div className="mx-auto mt-2 w-0.5 h-6 bg-gradient-to-b from-violet-400 to-fuchsia-400 group-hover:h-8 transition-all duration-300"></div>
        </a>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;