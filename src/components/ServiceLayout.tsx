import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  description,
  image,
  features,
  benefits
}) => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-deep-teal font-sans font-bold uppercase tracking-widest text-xs mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-deep-teal font-sans font-semibold tracking-widest uppercase text-sm mb-4">
                {subtitle}
              </h1>
              <h2 className="text-5xl md:text-7xl font-heading text-white mb-8 leading-tight">
                {title}
              </h2>
              <p className="text-white/60 text-xl leading-relaxed mb-12">
                {description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-white font-heading text-xl mb-4">Key Features</h3>
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-deep-teal" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-heading text-xl mb-4">Patient Benefits</h3>
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/50 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-deep-teal" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="/#contact" 
                className="inline-block px-10 py-5 bg-deep-teal text-white rounded-full font-sans font-bold hover:bg-oceanic-teal transition-all shadow-xl shadow-deep-teal/20"
              >
                Schedule Consultation
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]"
            >
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-deep-teal/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
