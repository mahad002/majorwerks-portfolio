import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="company" className="py-24 bg-gradient-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-8">The vision</h2>
              
              <div className="space-y-12">
                <div className="group relative bg-navy-800/30 backdrop-blur-lg p-8 rounded-lg hover:bg-navy-700/40 transition-all duration-500 cursor-pointer border border-white/5">
                  <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>
                  <div className="relative">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      We aim to make a significant impact in future tech, and build solutions 
                      which can be used by the people around us.
                    </p>
                  </div>
                </div>
                
                <div className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 cursor-pointer shadow-lg shadow-purple-500/20">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Our Story</h3>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      Founded in 2022, MajorWerks has quickly established itself as an innovative 
                      force in the AI industry. We specialize in creating intelligent solutions 
                      that transform how businesses operate.
                    </p>
                  </div>
                </div>
                
                <a 
                  href="/vision" 
                  className="group inline-flex items-center text-lg text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                >
                  <span className="mr-2">Learn more about us</span>
                  <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 backdrop-blur-lg rounded-3xl transform rotate-12 transition-all duration-500 hover:rotate-6 hover:bg-white/10 shadow-lg shadow-purple-500/20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 backdrop-blur-lg rounded-2xl transform -rotate-12 transition-all duration-500 hover:-rotate-6 hover:bg-white/10 shadow-lg shadow-fuchsia-500/20"></div>

              {/* Main text container */}
              <div className="relative w-full max-w-md aspect-square group bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-lg rounded-3xl p-12 transform rotate-3 transition-all duration-500 hover:rotate-6 shadow-lg shadow-purple-500/30">
                <div className="absolute inset-0 bg-white/5 rounded-3xl transform -rotate-3 transition-all duration-500 group-hover:-rotate-6"></div>
                <div className="relative z-10 h-full flex flex-col justify-center space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Innovation Through Intelligence</h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    We believe in harnessing the power of AI to create solutions that not only solve problems but transform how businesses operate in the digital age.
                  </p>
                  <div className="pt-4">
                    <span className="inline-block text-purple-400 text-sm font-medium tracking-wider uppercase">Est. 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;