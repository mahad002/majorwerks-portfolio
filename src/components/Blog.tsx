import React from 'react';
import { ArrowRight } from 'lucide-react';
import { sendSubscriptionEmail } from '../services/emailService';

const Blog: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await sendSubscriptionEmail(email);
      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you for subscribing! Check your email for confirmation.'
        });
        setEmail('');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-3 bg-navy-800/30 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 border border-white/5"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-indigo-500/50 cursor-not-allowed'
                      : 'bg-gradient-primary hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Subscribing...' : (
                    <>
                      Subscribe
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
              
              {status.type && (
                <div
                  className={`text-center p-4 rounded-lg ${
                    status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;