import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Shield, Sparkles } from 'lucide-react';

export const AdvantageSection: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "No Bone Grafting",
      description: "Forget painful, months-long grafting. We utilize your existing bone structure for a faster, less invasive transformation."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Months Saved",
      description: "Traditional implants can take up to a year. The 123Teeth™ workflow delivers your final, permanent smile in a fraction of the time."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Goodbye Dentures",
      description: "Skip the \"removable\" phase. Get fixed, non-removable teeth from day one—no adhesives, no slipping, no embarrassment."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Zirconia Excellence",
      description: "The gold standard. Enjoy premium Zirconia prosthetics that offer diamond-like durability and a flawless, natural glow."
    }
  ];

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30%] h-[40%] bg-deep-teal/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
            The 123Teeth™ Advantage
          </h2>
          <h3 className="text-4xl md:text-6xl font-heading text-white mb-6">
            Your Journey to a New Smile<br />
            <span className="text-deep-teal italic">STARTS RIGHT HERE.</span>
          </h3>

        </div>

        {/* Office Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-16 h-80 border border-white/10 shadow-2xl"
        >
          <img
            src="/old office3.avif"
            alt="Orlando Lifestyle Dentistry Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-deep-teal/20 rounded-2xl flex items-center justify-center text-deep-teal mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-heading text-white mb-4">{feature.title}</h4>
              <p className="text-white/50 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
