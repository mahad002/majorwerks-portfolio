import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div>
              <h2 className="text-5xl font-bold font-montserrat mb-6 text-white">Our Blog</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                Stay tuned for insights and perspectives on artificial intelligence, machine learning, and automation.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-navy-800/30 backdrop-blur-lg px-8 py-4 rounded-lg text-gray-300 mb-8 border border-white/5">
              Coming Soon
            </div>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12">
              We're working on bringing you valuable content about AI, technology, and innovation. Subscribe to our newsletter to be notified when we launch.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-3 bg-navy-800/30 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 border border-white/5"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-gradient-primary text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:opacity-90"
              >
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;