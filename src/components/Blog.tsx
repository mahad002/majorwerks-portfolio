import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div>
              <h2 className="text-5xl font-bold font-montserrat mb-6">Our Blog</h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12">
                Stay tuned for insights and perspectives on artificial intelligence, machine learning, and automation.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-neutral-100 px-8 py-4 rounded-full text-neutral-600 mb-8">
              Coming Soon
            </div>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto mb-12">
              We're working on bringing you valuable content about AI, technology, and innovation. Subscribe to our newsletter to be notified when we launch.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-6 py-3 bg-neutral-100 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
              <button 
                type="submit"
                className="w-full sm:w-auto bg-neutral-800 text-white px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors duration-300 flex items-center justify-center"
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