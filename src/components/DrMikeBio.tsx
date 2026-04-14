import React from 'react';
import { motion } from 'framer-motion';

export const DrMikeBio: React.FC = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-deep-teal/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000" 
                alt="Dr. Michael Gagaoudakis" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-oceanic-teal/20 rounded-full blur-3xl -z-10" />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
              Meet Your Specialist
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white mb-8">
              Dr. Michael Gagaoudakis
              <span className="block text-2xl text-white/50 mt-2 font-sans font-normal">
                DDS, National Educator & Innovator
              </span>
            </h3>
            
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                With over 20 years of clinical excellence, Dr. Michael "Mike" Gagaoudakis has dedicated his career 
                to mastering the most complex cases in restorative and implant dentistry. 
              </p>
              <p>
                A proud alumnus of <span className="text-white font-medium">Nova Southeastern University</span>, 
                Dr. Mike doesn't just practice dentistry—he teaches it. As a recognized national educator, 
                he travels across the country training fellow clinicians in advanced full-arch techniques.
              </p>
              <p>
                His philosophy is simple: every patient deserves a premium, empathetic experience backed by 
                the world's most advanced dental technology. At Orlando Lifestyle Dentistry, he combines 
                artistry with surgical precision to change lives, one smile at a time.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="text-3xl font-heading text-deep-teal">20+</div>
                <div className="text-sm text-white/40 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-heading text-deep-teal">5k+</div>
                <div className="text-sm text-white/40 uppercase tracking-wider">Smiles Restored</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-heading text-deep-teal">Natl.</div>
                <div className="text-sm text-white/40 uppercase tracking-wider">Educator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
