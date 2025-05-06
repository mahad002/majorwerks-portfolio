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
            <div className="inline-block bg-white/5 backdrop-blur-lg px-8 py-4 rounded-full text-gray-300 mb-8 shadow-lg shadow-purple-500/20">
              Coming Soon
            </div>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12">
              We're working on bringing you valuable content about AI, technology, and innovation. Subscribe to our newsletter to be notified when we launch.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center justify-center shadow-lg shadow-purple-500/20"
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