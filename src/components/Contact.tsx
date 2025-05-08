import React, { useState, memo, useCallback } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold font-montserrat mb-8 text-white">Get in touch</h2>
              <p className="text-xl text-gray-300 mb-12">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Email</h3>
                    <p className="text-gray-300">info@majorwerks.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Contact</h3>
                    <div className="space-y-1">
                      <p className="text-gray-300">US office: +1 (571) 508-9086</p>
                      <p className="text-gray-300">Middle East office: +974 7086 7033</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-white">Location</h3>
                    <p className="text-gray-300">Office 805- 105, Owned by SHAIKH SUHAIL MAKTOUM JUMA ALMAKTOUM, Port Saeed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy-800/30 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 border border-white/5"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy-800/30 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 border border-white/5"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-navy-800/30 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 resize-none border border-white/5"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group hover:opacity-90"
                >
                  <span>Send Message</span>
                  <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;