import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Microscope, Star, CheckCircle2, Sparkles } from 'lucide-react';

const MeetDrMike: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000" 
                alt="Dr. Michael Gagaoudakis" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-deep-teal/20 rounded-full blur-[120px] -z-10" />
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
                The Visionary Behind the Smile
              </h1>
              <h2 className="text-5xl md:text-7xl font-heading text-white mb-6 leading-tight">
                Dr. Michael <br />
                <span className="text-deep-teal italic">Gagaoudakis</span>
              </h2>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                With over two decades of experience in the dental industry, Dr. Mike has seen dentistry from every angle. He is one of the most experienced dental implant specialists in the world. He completed his dental school education in 2006 from Nova Southeastern University in Ft. Lauderdale, FL. For the last +20 years he has continued his education in the areas of implant surgery, implant prosthetics, bone grafting, full mouth reconstruction, digital dentistry, and zygomatic implants. He holds advanced certifications in surgery, prosthetics, and CAD/CAM workflows.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="text-4xl font-heading text-white mb-1">2006</div>
                  <div className="text-xs uppercase tracking-widest text-deep-teal font-bold">NSU Graduate</div>
                </div>
                <div>
                  <div className="text-4xl font-heading text-white mb-1">World Class</div>
                  <div className="text-xs uppercase tracking-widest text-deep-teal font-bold">Implant Specialist</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Philosophy & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Sparkles className="w-10 h-10 text-deep-teal mb-6" />
            <h3 className="text-2xl font-heading text-white mb-4">Innovation: 123Teeth™</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              Dr. Mike created the dental implant workflow called 123Teeth that helps dental implant patients avoid bone grafting and dentures and save months or years in their restoration process.
            </p>
            <p className="text-white/50 leading-relaxed">
              Dr. Mike invests in the latest technology for treatment that helps his patients save time and money but most importantly changes their lives for the better.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Heart className="w-10 h-10 text-deep-teal mb-6" />
            <h3 className="text-2xl font-heading text-white mb-4">People Over Profit</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              His practice philosophy is to always put people over profit. He values a good work ethic and instills that in his team. 
            </p>
            <p className="text-white/50 leading-relaxed">
              He’s worked tirelessly for many years to help patients get the smile of their dreams and he has assembled a team of assistants, anesthesiologists, lab technicians, and administrators that put patients first.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <BookOpen className="w-10 h-10 text-deep-teal mb-6" />
            <h3 className="text-2xl font-heading text-white mb-4">A Leader in Education</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              He is one of dentistry’s leaders in education. He is accredited by the Academy of General Dentistry to administer Continuing Education. He has taught hundreds of dentists over the past 10 years advanced surgical and restorative techniques.
            </p>
            <p className="text-white/50 leading-relaxed">
              Dr. Mike is also a nationally recognized speaker who has presented educational seminars for dental communities in over 30 states.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Star className="w-10 h-10 text-deep-teal mb-6" />
            <h3 className="text-2xl font-heading text-white mb-4">Beyond the Clinic</h3>
            <p className="text-white/50 leading-relaxed mb-6">
              He enjoys traveling, fishing, and biking in his free time and he also runs a local study club for dentists.
            </p>
            <div className="flex gap-4 mt-4">
              <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-white/40 uppercase tracking-widest">Traveling</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-white/40 uppercase tracking-widest">Fishing</span>
              <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-white/40 uppercase tracking-widest">Biking</span>
            </div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <div className="bg-muted rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-deep-teal/5 rounded-full blur-[120px] translate-x-1/4" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-heading text-white mb-8">Clinical Expertise</h2>
              <div className="space-y-4">
                {[
                  "Full-Arch Immediate Load Implants",
                  "Zygomatic & Pterygoid Implant Surgery",
                  "Digital Smile Design & Aesthetics",
                  "Complex Full-Mouth Reconstruction",
                  "IV Sedation & Patient Comfort",
                  "Advanced Bone Regeneration Techniques"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-deep-teal" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=500" alt="Clinic" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 mt-8">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500" alt="Tech" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetDrMike;
