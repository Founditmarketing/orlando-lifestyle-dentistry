import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Circle, Grid, Smile, Zap, Sparkles, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Circle className="w-8 h-8" />,
      title: "Single Tooth Implant",
      description: "A permanent, natural-looking replacement for a single missing tooth that preserves your jawbone and surrounding teeth.",
      link: "/services/single-tooth-implant",
      image: "/single-tooth-implant.png"
    },
    {
      icon: <Grid className="w-8 h-8" />,
      title: "Multiple Implants",
      description: "Strategically placed implants to support bridges or multiple crowns, restoring full function and aesthetics to your smile.",
      link: "/services/multiple-implants",
      image: "/multiple-implants.png"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Full Mouth Implants",
      description: "Total smile transformation for patients with significant tooth loss, providing a fixed, non-removable set of beautiful teeth.",
      link: "/services/full-mouth-implants",
      image: "/full-mouth-implants.png"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Advanced Custom Solutions",
      description: "Specialized Zygomatic and Pterygoid implants for complex cases where traditional bone structure may be lacking.",
      link: "/services/advanced-custom-solutions",
      image: "/old office2.jpg"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "123 Teeth™",
      description: "Our revolutionary 24-hour workflow. Walk in with missing teeth, walk out with a permanent, stunning smile in one day.",
      link: "/services/123-teeth",
      image: "/123-teeth-service.png"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-deep-teal/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-oceanic-teal/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading text-white mb-6"
          >
            World-Class <span className="text-deep-teal italic">Implant Dentistry</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            From single tooth replacements to revolutionary full-mouth restorations, we provide the most advanced solutions in modern dentistry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[32px] border overflow-hidden transition-all group ${
                service.title === "123 Teeth™" 
                  ? 'border-deep-teal shadow-2xl shadow-deep-teal/20 lg:col-span-2' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Image Panel */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Icon badge */}
                <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl flex items-center justify-center ${
                  service.title === "123 Teeth™" 
                    ? 'bg-deep-teal text-white' 
                    : 'bg-black/60 backdrop-blur-sm text-deep-teal border border-white/10'
                }`}>
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className={`p-8 ${
                service.title === "123 Teeth™" ? 'bg-deep-teal' : 'bg-white/5 backdrop-blur-sm'
              }`}>
                <h4 className="text-2xl md:text-3xl font-heading text-white mb-3">
                  {service.title}
                </h4>

                <p className={`text-base mb-6 leading-relaxed ${
                  service.title === "123 Teeth™" ? 'text-white/80' : 'text-white/50'
                }`}>
                  {service.description}
                </p>

                <Link 
                  to={service.link}
                  className={`inline-flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-xs transition-all ${
                    service.title === "123 Teeth™" 
                      ? 'text-white hover:gap-4' 
                      : 'text-deep-teal hover:text-white hover:gap-4'
                  }`}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
