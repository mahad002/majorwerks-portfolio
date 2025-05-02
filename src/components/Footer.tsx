import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold font-montserrat mb-6">MajorWerks</h3>
              <p className="text-neutral-400 font-open">
                Intelligent solutions for a smarter future.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-montserrat mb-6">Contact</h3>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-start">
                  <Mail size={18} className="mr-3 mt-1 flex-shrink-0" />
                  <span>hello@majorwerks.com</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-3 mt-1 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                  <span>123 AI Street, San Francisco, CA 94103</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-montserrat mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-neutral-400 hover:text-white transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#team" className="text-neutral-400 hover:text-white transition-colors duration-300">Team</a>
                </li>
                <li>
                  <a href="#careers" className="text-neutral-400 hover:text-white transition-colors duration-300">Careers</a>
                </li>
                <li>
                  <a href="#privacy" className="text-neutral-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-montserrat mb-6">Subscribe</h3>
              <p className="text-neutral-400 mb-4">
                Stay updated with our latest news and products.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-neutral-800 px-4 py-2 w-full focus:outline-none text-white"
                />
                <button 
                  type="submit"
                  className="bg-white text-neutral-900 px-4 hover:bg-neutral-200 transition-colors duration-300"
                >
                  →
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} MajorWerks. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#twitter" className="text-neutral-500 hover:text-white transition-colors duration-300">
                Twitter
              </a>
              <a href="#linkedin" className="text-neutral-500 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#github" className="text-neutral-500 hover:text-white transition-colors duration-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;