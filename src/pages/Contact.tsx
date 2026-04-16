import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
              Get In Touch
            </h1>
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-8 leading-tight">
              Let's Start Your <br />
              <span className="text-deep-teal italic">Transformation</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-deep-teal/10 rounded-2xl flex items-center justify-center text-deep-teal group-hover:bg-deep-teal group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-heading text-lg mb-1">Call Us</h3>
                  <a href="tel:4075550123" className="text-white/50 hover:text-deep-teal transition-colors">(407) 555-0123</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-deep-teal/10 rounded-2xl flex items-center justify-center text-deep-teal group-hover:bg-deep-teal group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-heading text-lg mb-1">Visit Us</h3>
                  <p className="text-white/50">123 Winter Park Way,<br />Orlando, FL 32801</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-deep-teal/10 rounded-2xl flex items-center justify-center text-deep-teal group-hover:bg-deep-teal group-hover:text-white transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-heading text-lg mb-1">Hours</h3>
                  <div className="text-white/50 space-y-1">
                    <p>Mon - Thu: 8:00 AM - 5:00 PM</p>
                    <p>Friday: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-white font-heading text-xl mb-6 flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-deep-teal" />
                Quick Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-deep-teal outline-none transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-deep-teal outline-none transition-colors"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-deep-teal outline-none transition-colors"
                />
                <textarea 
                  placeholder="How can we help?" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-deep-teal outline-none transition-colors resize-none"
                ></textarea>
                <button className="w-full py-4 bg-deep-teal text-white rounded-xl font-sans font-bold hover:bg-oceanic-teal transition-all shadow-lg shadow-deep-teal/20">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl h-[400px] relative group">
              <img 
                src="/old office.jpg"
                alt="Modern Dental Office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-heading text-2xl">Our Modern Facility</p>
                <p className="text-white/60 text-sm">Winter Park, Orlando</p>
              </div>
            </div>

            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl h-[400px] bg-muted">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56063.1205625477!2d-81.385072!3d28.5701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7701500000001%3A0x1234567890abcdef!2sWinter%20Park%2C%20FL!5e0!3m2!1sen!2sus!4v1713123456789!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-60"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Mini Footer for Contact Page since main footer is hidden */}
      <div className="py-12 border-t border-white/5 bg-muted/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2024 Orlando Lifestyle Dentistry. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
