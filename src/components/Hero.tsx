import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center pt-32 pb-20">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col min-h-[calc(100vh-128px)]">
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-10 backdrop-blur-sm"
              >
                <Sparkles className="w-3 h-3 text-deep-teal" />
                <span>Redefining Modern Dentistry</span>
              </motion.div>

              <h1 className="text-5xl md:text-8xl lg:text-[120px] font-heading text-white leading-[1.1] md:leading-[1] tracking-tighter mb-10">
                Experience <br />
                <span className="text-deep-teal italic">123Teeth™</span>
              </h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-2xl text-white/70 font-sans max-w-2xl mx-auto mb-14 leading-relaxed"
              >
                The world's most advanced full-arch restoration. No bone grafting. 
                No dentures. Just your perfect smile in record time.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <button className="group relative px-10 py-5 bg-deep-teal text-white rounded-full font-sans font-bold overflow-hidden transition-all hover:pr-14 shadow-2xl shadow-deep-teal/40">
                  <span className="relative z-10">Free Consultation</span>
                  <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5" />
                </button>
                
                <button className="px-10 py-5 border border-white/20 text-white rounded-full font-sans font-bold hover:bg-white hover:text-background transition-all backdrop-blur-sm">
                  View Gallery
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats / Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="py-12 w-full"
        >
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-white">15k+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/50">Smiles Restored</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-white">99.8%</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/50">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-white">24hr</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-white/50">Turnaround</div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
