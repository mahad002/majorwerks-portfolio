import React from 'react';
import { ArrowRight } from 'lucide-react';

const BookCall: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-indigo-900 rounded-3xl overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-900/50 to-transparent"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Start?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Simply leave your contact details below, and we'll be in touch with you soon.
                </p>
                <button className="inline-flex items-center bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-opacity-90 group">
                  <span>BOOK A CALL WITH OUR TEAM</span>
                  <ArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              
              <div className="relative hidden lg:block">
                <img 
                  src="https://images.pexels.com/photos/3201768/pexels-photo-3201768.jpeg"
                  alt="Decorative peacock illustration"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;